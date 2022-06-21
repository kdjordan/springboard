const express = require("express");
const ExpressError = require("../expressError")
const router = express.Router();
const db = require("../db");

router.get('/', async (req, res, next) => {
    try {
        const results = await db.query('SELECT * FROM invoices')
        return res.status(200).json({invoice: results.rows})
    } catch(e) {
        next(e)
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
        next(e)
    }
})

router.put('/:id', async (req, res, next) => {
    try {
        let { id } = req.params
        let { amt } = req.body
        const results = await db.query(`UPDATE invoices SET amt=$1 WHERE id=$2 RETURNING id, comp_code, amt, paid, add_date, paid_date`, [amt, id])
        if (results.rows.length === 0) {
            throw new ExpressError(`Company cannot be found ${id}`, 404)
          }
        return res.status(201).json({invoice: results.rows[0]})
    } catch(e) {
        next(e)
    }
})

router.post('/', async (req, res, next) => {
    try {
        let { comp_code, amt } = req.body
        const results = await db.query('INSERT INTO invoices (comp_code, amt) VALUES ($1, $2) RETURNING id, comp_code, amt, paid, add_date, paid_date', [comp_code, amt ])
        return res.status(201).json({invoice: results.rows[0]})
    } catch(e) {
        next(e)
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
        next(e)
    }
})



module.exports = router