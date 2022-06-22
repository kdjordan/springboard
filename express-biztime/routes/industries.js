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

// router.put('/:id', async (req, res, next) => {
//     try {
//         let { id } = req.params
//         let { amt, paid } = req.body
//         let paidDate = null
//         const currResult = await db.query('SELECT * FROM invoices WHERE id=$1', [id])
//         if (currResult.rows.length === 0) {
//             throw new ExpressError(`No such invoice: ${id}`, 404);
//           }
//         const currPaidDate = currResult.rows[0].paid_date      

//         if(paid && !currPaidDate) {
//            paidDate = new Date()
//         } else if (!paid) {
//             paidDate = null
//         } else {
//             paidDate = currPaidDate
//         }

//         const updateResult = await db.query(
//             `UPDATE invoices
//              SET amt=$1, paid=$2, paid_date=$3
//              WHERE id=$4
//              RETURNING id, comp_code, amt, paid, add_date, paid_date`,
//           [amt, paid, paidDate, id]);
//         return res.status(200).send({ 'invoice': updateResult.rows[0]})

//     } catch(e) {
//         return next(e)
//     }
// })

router.post('/', async (req, res, next) => {
    try {
        let { code, industry } = req.body
        const results = await db.query('INSERT INTO industries (code, industry) VALUES ($1, $2) RETURNING code, industry', [code, industry ])
        return res.status(201).json({industry: results.rows[0]})
    } catch(e) {
        return next(e)
    }
})

router.post('/add/:comp_code', async (req, res, next) => {
    try {
        let { code } = req.params
        let { industry } = req.body
        const results = await db.query('INSERT INTO company_industries (company_code, industry_code) VALUES ($1, $2) RETURNING code, industry', [code, industry ])
        if (results.rows.length === 0) {
            throw new ExpressError(`Error associating ${code} with ${industry}`, 404)
          }
        return res.status(201).json({industry: results.rows[0]})
    } catch(e) {
        return next(e)
    }
})





module.exports = router