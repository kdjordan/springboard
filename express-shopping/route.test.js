process.env.NODE_ENV = 'test'

const request = require('supertest')

const app = require('./app')
let db = require('./fakeDb')

let item = {'name': 'pickles', 'price': 4.20}

beforeEach(() => {
    db.push(item)
})

afterEach(() => {
    db.length = 0
})

describe('Test /items',  () => {
    test('get all items', async () => {
        const resp  = await request(app).get('/items')
        const {items} = resp.body
        expect(resp.statusCode).toBe(200)
        expect(items).toHaveLength(1)
        expect(items[0].name).toEqual('pickles')
    })

    test('test specific item', async () => {
        const resp = await request(app).get('/items/pickles')
        expect(resp.body.name).toEqual('pickles')
    })

    test('test specific item fail', async () => {
        const resp = await request(app).get('/items/wine')
        console.log(resp.body)
        expect(resp.statusCode).toBe(404)
    })
})

describe('Post /items', () => {
    test('add new item', async () => {
        const resp = await request(app).post('/items').send({'name':'wine', 'price':12.99})
        expect(resp.statusCode).toBe(200)
        expect(resp.body.item.name).toEqual('wine')
        expect(resp.body.item.price).toEqual(12.99)
    })
})

describe('Post /items', () => {
    test('add new item', async () => {
        const resp = await request(app).post('/items').send({'name':'wine', 'price':12.99})
        expect(resp.statusCode).toBe(200)
        expect(resp.body.item.name).toEqual('wine')
        expect(resp.body.item.price).toEqual(12.99)
    })
})