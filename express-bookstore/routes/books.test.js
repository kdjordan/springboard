// Tell Node that we're in test "mode"
process.env.NODE_ENV = 'test';

const request = require('supertest');
const app = require('../app');
const db = require('../db');

let testBook
beforeEach(async () => {
    const result = await db.query(
        `INSERT INTO books
            VALUES ('9999999', 'http://a.co/eobPtX2', 'Fake Author', 'english', 1234, 'A publishing Co', 'The Best Book Ever', 1998)
        RETURNING isbn, amazon_url, author, language, pages, publisher, title, year`)
    testBook = result.rows[0]
})

afterEach(async () => {
  await db.query(`DELETE FROM books`)
})

afterAll(async () => {
  await db.end()
})

describe("GET /books", () => {
  test("Get all books", async () => {
    const res = await request(app).get('/books')
    let { books } = res.body
    expect(res.statusCode).toBe(200);
    expect(books[0].isbn).toEqual(testBook.isbn)
    expect(books[0].pages).toEqual(testBook.pages)
  })
})

describe("GET /books/:id", () => {
  test("Gets a single book", async () => {
    const res = await request(app).get(`/books/${testBook.isbn}`)
    expect(res.statusCode).toBe(200);
    expect(res.body.book.isbn).toEqual(testBook.isbn)
    expect(res.body.book.year).toEqual(testBook.year)
  })
  test("Responds with 404 for invalid book code", async () => {
    const res = await request(app).get(`/books/555`)
    expect(res.statusCode).toBe(404);
  })
})

describe("POST /books", () => {
  test("Creates a single book", async () => {
    const res = await request(app).post('/books')
    .send({ isbn: '666666', amazon_url: 'http://fakeamazon.com', author: 'Another Fake Author', language:'french', pages: 12, publisher:'Another Pub Co', title: 'Where are we?', year: 1776});
    expect(res.statusCode).toBe(201);
    expect(res.body.book.isbn).toEqual('666666')
    expect(res.body.book.title).toEqual('Where are we?')
    expect(res.body.book.language).toEqual('french')
  })
  test("Creates a single book -- FAIL ! No ISBN", async () => {
    const res = await request(app).post('/books')
    .send({  amazon_url: 'http://fakeamazon.com', author: 'Another Fake Author', language:'french', pages: 12, publisher:'Another Pub Co', title: 'Where are we?', year: 1776})

    expect(res.statusCode).toBe(500);
  })
})

describe("PUT /books/:isbn", () => {
  test("Updates a single book", async () => {
    const res = await request(app).put(`/books/${testBook.isbn}`).send({ isbn: `${testBook.isbn}`, amazon_url: 'http://fakeamazon.com', author: 'Another Fake Author', language:'french', pages: 4343, publisher:'Another Pub Co', title: 'Where are we?', year: 1776 })
    expect(res.statusCode).toBe(200);
    expect(res.body.book.isbn).toEqual(`${testBook.isbn}`)
    expect(res.body.book.pages).toEqual(4343)
  })
  test("Responds with 404 for invalid book code", async () => {
    const res = await request(app).put(`/books/121212`).send({ name: 'newcompany', description:'A desc test' });
    expect(res.statusCode).toBe(404);
  })
})



