const express = require('express')
const ExpressError = require('./expressError')

const app = express()

app.use(express.json())

app.get('/mean', (req, res)=> {
    try {
        let nums = req.query.nums.split(',')
        total = 0
        nums.forEach(num => {
            if(isNaN(num)) {
                return res.status(400).json(`error: ${num} is not a number`)
            }
            total += parseInt(num, 10)
        });

        let val = total/nums.length
        return res.status(200).json({
            operation: 'mean',
            value: `${val}`
        }) 
    } catch (e) {
        console.log(e)
        next(e)
    }
})

app.get('/midpoint', (req, res)=> {
    try {
        let nums = req.query.nums.split(',')
        let val = nums[Math.ceil((nums.length-1)/2)]
        return res.status(200).json({
            operation: 'midpoint',
            value: `${val}`
        }) 
    } catch (e) {
        console.log(e)
        next(e)
    }
})

app.get('/mode', (req, res)=> {
    try {
        let nums = req.query.nums.split(',')
        console.log('nums ', nums)
        let retObj = {}
        nums.forEach(num => {
            if(num !== '' && !isNAN(num)) {
                if(!retObj[num]) {
                    retObj[num] = 1
                } else {
                    retObj[num] += 1
                }
            } else {
                return res.status(400).json(`error: ${num} is not a number`)
            }
        })
        return res.status(200).json({
            operation: 'mode',
            value: retObj
        }) 
    } catch (e) {
        console.log(e)
        next(e)
    }
})

app.use((error, req, res, next) => {
    if(Object.keys(req.params).length === 0) {
        return res.status(400).send('No numbers supplied !')
    }
    let status = error.status || 500
    let mssg = error.mssg

    return res.status(status).json({
        error: (mssg, status)
    })
}) 


app.listen(3000, ()=> {
    console.log('App listening on 3000')
})