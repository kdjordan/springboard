const express = require('express')
const ExpressError = require('./expressError')
const {checkInput, getMean, getMidpoint, getMode} = require('./functions')
const {checkArr} = require('./functions')

const app = express()

app.use(express.json())

app.get('/mean', (req, res, next)=> {
    let arr = checkInput(req.query.nums)

    if(!(arr instanceof Error)){
        let result = getMean(arr)
        return res.status(200).json({
            operation : 'mean',
            value: result
        })
     } else {
        next(e)
     }
})

app.get('/midpoint', (req, res, next)=> {
    let arr = checkInput(req.query.nums)

    if(!(arr instanceof Error)){
        try {
            let result = getMidpoint(arr)
            return res.status(200).json({
                operation : 'midpoint',
                value: result
            })
        } catch(e) {
            next(e)
        }
     } else {
        throw new ExpressError(arr)
     }
})

app.get('/mode', (req, res, next)=> {
    let arr = checkInput(req.query.nums)
    
    if(!(arr instanceof Error)){
        try {
            let result = getMode(arr)
            return res.status(200).json({
                operation : 'mode',
                value: result
            })
        } catch(e) {
            next(e)
        }
     } else {
        throw new ExpressError(arr)
     }
})


app.use((error, req, res, next) => {
        if (error) {
            let status = error.status || 500
            let mssg = error.mssg
        return res.status(status).json({
            error: (mssg, status)
        })
    }
}) 


app.listen(3000, ()=> {
    console.log('App listening on 3000')
})