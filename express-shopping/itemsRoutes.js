const express = require('express')
const router = new express.Router()
const Item = require('./item')


//GET ALL ITEMS FROM LIST
router.get('/', (req, res) => {
    try {
        return res.json({items: Item.findAll()})
    } catch(e) {
        return next(e)
    }
})

//GET A SPECIFIC ITEM FROM LIST
router.get('/:product', (req, res, next) => {
    try {
        return res.json(Item.findOne(req.params.product))
    } catch(e) {
        return next(e)
    }
})


//ADD ITEM TO LIST
router.post('', (req, res, next) => {
    try {
        let newItem = new Item(req.body.name, req.body.price)
        return res.json({item: newItem})
    } catch(e) {
        return next(e)
    }
})


//UPDATE ITEM IN LIST
router.patch('/:name', (req, res) => {
    try {
        let response = Item.updateItem(req.params.name, req.body)
        console.log('response ', response)
        return res.json({'updated': response})
    } catch(e) {
        return next(e)
    }
})

//DELETE ITEM FROM LIST
router.delete('/:name', (req, res) => {
    try {
        let response = Item.removeItem(req.params.name, req.body)
        return res.status(200).json({"message":"deleted"})
    } catch(e) {
        return next(e)
    }
})

module.exports = router



