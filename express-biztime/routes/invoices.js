const express = require("express");
const ExpressError = require("../expressError")
const router = express.Router();
const db = require("../db");

router.get('/', async (req, res, next) => {
    try {
        const results = await db.query('SELECT * FROM invoices')
        return res.status(200).json({invoice: results.rows})
    } catch(e) {
        return next(e)
    }
})

router.get('/:id', async (req, res, next) => {
    try {
        let { id } = req.params
        const results = await db.query('SELECT * FROM invoices WHERE id=$1', [id])
        if (results.rows.length === 0) {
            throw new ExpressError(`Can't find invoice with id of ${id}`, 404)
          }
        return res.status(200).json({invoice: results.rows[0]})
    } catch(e) {
        return next(e)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        
        let { id } = req.params
        let { amt, paid } = req.body
        let paidDate = null
        const currResult = await db.query('SELECT * FROM invoices WHERE id=$1', [id])
        if (currResult.rows.length === 0) {
            throw new ExpressError(`No such invoice: ${id}`, 404);
          }
        const currPaidDate = currResult.rows[0].paid_date      

        if(paid && !currPaidDate) {
           paidDate = new Date()
        } else if (!paid) {
            paidDate = null
        } else {
            paidDate = currPaidDate
        }

        const updateResult = await db.query(
            `UPDATE invoices
             SET amt=$1, paid=$2, paid_date=$3
             WHERE id=$4
             RETURNING id, comp_code, amt, paid, add_date, paid_date`,
          [amt, paid, paidDate, id]);
        return res.status(200).send({ 'invoice': updateResult.rows[0]})

    } catch(e) {
        return next(e)
    }
})

router.post('/', async (req, res, next) => {
    try {
        let { comp_code, amt } = req.body
        const results = await db.query('INSERT INTO invoices (comp_code, amt) VALUES ($1, $2) RETURNING id, comp_code, amt, paid, add_date, paid_date', [comp_code, amt ])
        return res.status(201).json({invoice: results.rows[0]})
    } catch(e) {
        return next(e)
    }
})

router.delete('/:id', async (req, res, next) => {
    try {
        let { id } = req.params
        const results = await db.query('DELETE from invoices WHERE id=$1', [id])
        if (results.rowCount === 0) {
            throw new ExpressError(`Invoice cannot be found ${id}`, 404)
          }
        return res.status(201).json({status: 'DELETED'})
    } catch(e) {
        return next(e)
    }
})



module.exports = router