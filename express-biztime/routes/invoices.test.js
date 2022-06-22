// Tell Node that we're in test "mode"
process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');
const db = require('../db');

let testInvoice;
beforeEach(async () => {
    const cmpResult = await db.query(`INSERT INTO companies VALUES ('apple', 'Apple Computer', 'Maker of Apple things')`)
    const result = await db.query(`INSERT INTO invoices (comp_code, amt) VALUES ($1, $2) RETURNING id, comp_code, amt, paid, add_date, paid_date`, ['apple', 420.00 ]);
    testInvoice = result.rows[0]
})

afterEach(async () => {
  await db.query(`DELETE FROM invoices`)
  await db.query(`DELETE FROM companies`)
})

afterAll(async () => {
  await db.end()
})

describe("GET /invoices", () => {
  test("Get all invoices", async () => {
    const res = await request(app).get('/invoices')
    expect(res.statusCode).toBe(200);
    expect(res.body.invoice[0].comp_code).toEqual(testInvoice.comp_code )
    expect(res.body.invoice[0].amt).toEqual(testInvoice.amt )
  })
})

describe("GET /invoices/:id", () => {
  test("Gets a single invoice", async () => {
    const res = await request(app).get(`/invoices/${testInvoice.id}`)
    expect(res.statusCode).toBe(200);
    expect(res.body.invoice.comp_code).toEqual(testInvoice.comp_code )
    expect(res.body.invoice.amt).toEqual(testInvoice.amt )
  })
  test("Responds with 404 for invalid id", async () => {
    const res = await request(app).get(`/invoices/0`)
    expect(res.statusCode).toBe(404);
  })
})

describe("POST /invoices", () => {
  test("Creates a single invoice", async () => {
    const res = await request(app).post('/invoices').send({ comp_code: 'apple', amt: '20.00' });
    expect(res.statusCode).toBe(201);
    expect(res.body.invoice.comp_code).toEqual('apple')
    expect(res.body.invoice.amt).toEqual(20)
  })
})

describe("PUT /invoices/:id", () => {
  test("Updates a single user", async () => {
    const res = await request(app).put(`/invoices/${testInvoice.id}`).send({ amt: 400.00 });
    expect(res.statusCode).toBe(201);
    expect(res.body.invoice.id).toEqual(testInvoice.id)
    expect(res.body.invoice.amt).toEqual(400.00)
  })
  test("Responds with 404 for invalid id", async () => {
    const res = await request(app).put(`/invoices/0`).send({ amt: 400.00 });
    expect(res.statusCode).toBe(404);
  })
})

describe("DELETE /invoices/:id", () => {
  test("Deletes a single invoice", async () => {
    const res = await request(app).delete(`/invoices/${testInvoice.id}`);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ status: 'DELETED' })
  })
})


