const express = require("express");
const ExpressError = require("../expressError")
const router = express.Router();
const db = require("../db");
const slugify = require('../slugify')

router.get('/', async (req, res, next) => {
    try {
        const results = await db.query('SELECT * FROM companies')
        return res.status(200).json({companies: results.rows})
    } catch(e) {
        next(e)
    }
})

router.get('/:code', async (req, res, next) => {
    try {
        let { code } = req.params
        const results = await db.query('SELECT * FROM companies WHERE code=$1', [code])
        if (results.rows.length === 0) {
            throw new ExpressError(`Can't find company with code of ${code}`, 404)
          }
        return res.status(200).json({company: results.rows[0]})
    } catch(e) {
        next(e)
    }
})

router.put('/:code', async (req, res, next) => {
    try {
        let code = req.params.code
        let { name, description } = req.body
        const results = await db.query(`UPDATE companies SET name=$2, description=$3 WHERE code=$1 RETURNING code, name, description`, [code, name, description])
        if (results.rows.length === 0) {
            throw new ExpressError(`Company cannot be found ${code}`, 404)
          }
        return res.status(201).json({company: results.rows[0]})
    } catch(e) {
        next(e)
    }
})

router.post('/', async (req, res, next) => {
    try {
        let { code, name, description } = req.body
        const results = await db.query('INSERT INTO companies (code, name, description) VALUES ($1, $2, $3) RETURNING code, name, description', [code, name, description])
        return res.status(201).json({company: results.rows[0]})
    } catch(e) {
        next(e)
    }
})

router.delete('/:code', async (req, res, next) => {
    try {
        let { code } = req.params
        const results = await db.query('DELETE from companies WHERE code=$1 RETURNING code', [code])
        if (results.rowCount === 0) {
            throw new ExpressError(`Company code cannot be found ${id}`, 404)
          }
        return res.status(201).json({status: 'DELETED'})
    } catch(e) {
        next(e)
    }
})



module.exports = router