const express = require('express')
const router = new express.Router()

const ITEMS = require('./fakeDB.js')

//GET ALL ITEMS IN LIST
router.get('/', (req, res) => {
    console.log('getting index in router')
    return res.json(ITEMS)
})

//GET A SPECIFIC ITEM IN LIST
router.get('/:product', (req, res, next) => {
    let {product} = req.params
    console.log('finding', product)
    let retObj = ITEMS.find(pro => {
        return pro.name === product
    })
    if(!retObj){
        return new Error(`${product} not found`)
    } else {
        return res.json(retObj)
    }
})


//ADD ITEM TN LIST
router.post('/', (req, res) => {
    console.log('received', req.body)
    ITEMS.push(req.body)
    console.log(ITEMS)
    return res.status(200).json({
        "added": req.body
    })
})


//UPDATE ITEM IN LIST
router.patch('/items:name', (req, res) => {
    console.log('patching', req.params.name)
    return res.sendStatus(200)
})

router.delete('itmes')

module.exports = router



