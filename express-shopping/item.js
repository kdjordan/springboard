const items = require('./fakeDb.js')

class Item {
    constructor(name, price) {
        this.name = name
        this.price = price

        items.push(this)
    }

    static findAll() {
        return items
    }

    static find(name) {
        let item = items.find(el => el.name === name)
        if(item === undefined) {
            throw {message: 'NOT FOUND', status: 404}
        } else {
            return item
        }
    }

    static findOne(name) {
        let item = this.find(name)
        return item
    }

    static updateItem(name, payload) {
        let item = Item.find(name)
        if(item === undefined) {
            throw {message: 'NOT FOUND', status: 404}
        } else {
            item.name = payload.name
            item.price = payload.price
            return item
        }
    }

    static removeItem(name) {
        let itemIndex = items.findIndex(el => el.name === name)
        if(itemIndex === -1) {
            throw {message: 'NOT FOUND', status: 404}
        } else {
            items.splice(itemIndex, 1)
        }
    }
}

module.exports = Item