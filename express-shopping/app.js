const express = require('express')
const ExpressError = require('./expressError')
const itemsRoutes = require('./itemsRoutes')


const app = express()

app.use(express.json())
app.use('/items', itemsRoutes)

//404 handler
app.use((req, res, next)=> {
    return new ExpressError('Not Found', 404)
})

//error handling
app.use((error, req, res, next)=> {
    if (error) {
        let status = error.status || 500
        let mssg = error.mssg
        return res.status(status).json({
            error: (mssg, status)
        })
    }
})

app.listen(3000, ()=> {
    console.log('App listening on PORT 3000')
})

