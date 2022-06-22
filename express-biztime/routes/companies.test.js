// Tell Node that we're in test "mode"
process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');
const db = require('../db');

let testCompany
beforeEach(async () => {
    const result = await db.query(`INSERT INTO companies VALUES ('test company', 'Test Company Inc', 'Maker of Test things')
    RETURNING code, name, description`)
    testCompany = result.rows[0]
})

afterEach(async () => {
  await db.query(`DELETE FROM companies`)
})

afterAll(async () => {
  await db.end()
})

describe("GET /companies", () => {
  test("Get all companies", async () => {
    const res = await request(app).get('/companies')
    let { companies } = res.body
    console.log('****', companies)
    expect(res.statusCode).toBe(200);
    expect(companies[0].code).toEqual(testCompany.code)
    expect(companies[0].name).toEqual(testCompany.name)
  })
})

describe("GET /companies/:code", () => {
  test("Gets a single company", async () => {
    const res = await request(app).get(`/companies/${testCompany.code}`)
    expect(res.statusCode).toBe(200);
    console.log(res.body)
    expect(res.body.company.comp_code).toEqual(testCompany.comp_code)
    expect(res.body.company.name).toEqual(testCompany.name)
  })
  test("Responds with 404 for invalid company code", async () => {
    const res = await request(app).get(`/companies/appleee`)
    expect(res.statusCode).toBe(404);
  })
})

describe("POST /companies", () => {
  test("Creates a single company", async () => {
    const res = await request(app).post('/companies').send({ code: 'test2', name: 'Test Co #2', description: 'A testing company'});
    expect(res.statusCode).toBe(201);
    expect(res.body.company.code).toEqual('test2')
    expect(res.body.company.name).toEqual('Test Co #2')
    expect(res.body.company.description).toEqual('A testing company')
  })
})

describe("PUT /companies/:code", () => {
  test("Updates a single company", async () => {
    const res = await request(app).put(`/companies/${testCompany.code}`).send({ name: 'newcompany', description:'A desc test' });
    expect(res.statusCode).toBe(201);
    expect(res.body.company.name).toEqual('newcompany')
    expect(res.body.company.description).toEqual('A desc test')
  })
  test("Responds with 404 for invalid company code", async () => {
    const res = await request(app).put(`/companies/fake`).send({ name: 'newcompany', description:'A desc test' });
    expect(res.statusCode).toBe(404);
  })
})

describe("DELETE /companies/:code", () => {
  test("Deletes a single company", async () => {
    const res = await request(app).delete(`/companies/${testCompany.code}`);
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ status: 'DELETED' })
  })
})


