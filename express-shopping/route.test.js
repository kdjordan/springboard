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

describe('update /items', () => {
    test('updagte an item', async () => {
        const resp = await request(app).patch('/items/pickles').send({'name':'pickles', 'price':12.99})
        expect(resp.statusCode).toBe(200)
        expect(resp.body.updated.price).toEqual(12.99)
        expect(items.length).toEqual(1)
    })
    test('updagte an item fail', async () => {
        const resp = await request(app).patch('/items/picklesfail').send({'name':'pickles', 'price':12.99})
        expect(resp.statusCode).toBe(404)
        expect(items.length).toEqual(1)
    })
})

describe('delete /items', () => {
    test('delete an item', async () => {
        const resp = await request(app).delete('/items/pickles')
        expect(resp.statusCode).toBe(200)
        expect(resp.body.message).toEqual('deleted')
        expect(items.length).toEqual(0)
    })
})