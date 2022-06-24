const express = require("express");
const ExpressError = require("../expressError")
const router = express.Router();
const db = require("../db");
const slugify = require('../slugify')

router.get('/', async (req, res, next) => {
    try {
        const results = await db.query('SELECT * FROM companies ORDER BY name')
        return res.status(200).json({companies: results.rows})
    } catch(e) {
        return next(e)
    }
})

router.get('/:code', async (req, res, next) => {
    try {
        let { code } = req.params
        const results = await db.query('SELECT * FROM companies WHERE code=$1', [code])
        if (results.rows.length === 0) {
            throw new ExpressError(`Can't find company with code of ${code}`, 404)
          }
        let company = results.rows[0]

        const invResults = await db.query(`SELECT id FROM invoices WHERE comp_code = $1`, [code])

        if(invResults.rows.length > 0) {
            company.invoices = invResults.rows.map(inv => inv.id)
        }

        const industResults = await db.query(
            `SELECT i.industry
            FROM industries AS i
            JOIN company_industries AS c_i 
             ON (i.code = c_i.industry_code)
            WHERE c_i.company_code = $1`, [code])

        if(industResults.rows.length > 0) {
            company.industries = industResults.rows.map(ind => ind.industry)
        }
        return res.status(200).json({company: company})
    } catch(e) {
        return next(e)
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
        return next(e)
    }
})

router.post('/', async (req, res, next) => {
    try {
        let { code, name, description } = req.body
        code = slugify(code)
        const results = await db.query('INSERT INTO companies (code, name, description) VALUES ($1, $2, $3) RETURNING code, name, description', [code, name, description])
        return res.status(201).json({company: results.rows[0]})
    } catch(e) {
        return next(e)
    }
})

router.delete('/:code', async (req, res, next) => {
    try {
        let { code } = req.params
        const results = await db.query('DELETE from companies WHERE code=$1 RETURNING code', [code])
        if (results.rowCount === 0) {
            throw new ExpressError(`Company code cannot be found ${code}`, 404)
          }
        return res.status(201).json({status: 'DELETED'})
    } catch(e) {
        return next(e)
    }
})



module.exports = router