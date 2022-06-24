const express = require("express");
const ExpressError = require("../expressError")
const router = express.Router();
const db = require("../db");

router.get('/', async (req, res, next) => {
    try {
        const results = await db.query('SELECT * FROM industries')
        return res.status(200).json({industries: results.rows})
    } catch(e) {
        return next(e)
    }
})

router.get('/:code', async (req, res, next) => {
    try {
        let { code } = req.params
        const results = await db.query('SELECT * FROM industries WHERE code=$1', [code])
        if (results.rows.length === 0) {
            throw new ExpressError(`Can't find industry with code of ${code}`, 404)
          }
        return res.status(200).json({industry: results.rows[0]})
    } catch(e) {
        return next(e)
    }
})

router.post('/', async (req, res, next) => {
    try {
        let { code, industry } = req.body
        const results = await db.query('INSERT INTO industries (code, industry) VALUES ($1, $2) RETURNING code, industry', [code, industry ])
        return res.status(201).json({industry: results.rows[0]})
    } catch(e) {
        return next(e)
    }
})

router.post('/add/:code', async (req, res, next) => {
    console.log('hittint')
    try {
        let { code } = req.params
        let { industry } = req.body
        console.log('hittint', code, industry)
        const results = await db.query(
            `INSERT INTO company_industries (company_code, industry_code)
                VALUES ($1, $2) 
                RETURNING company_code, industry_code`,
            [code, industry])
            console.log('done')
        if (results.rows.length === 0) {
            throw new ExpressError(`Error associating ${code} with ${industry}`, 404)
          }
        return res.status(201).json({industry: results.rows[0]})
    } catch(e) {
        return next(e)
    }
})





module.exports = router