const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const { ensureLoggedIn, ensureAdmin } = require("../middleware/auth");
const User = require('../models/user')

/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/

router.post('/login', (req, res, next) => {
    console.log('getting auth')
})


/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */

 router.post('/register', async (req, res, next) => {
    try {
        console.log(req.body)
        const { username, password, first_name, last_name, phone } = req.body
        if(!username || !password || ! first_name || !last_name || !phone) {
            throw new ExpressError('Invalid Input !')
        }
        const hashedPassword = await bcrypt.hash(username, BCRYPT_WORK_FACTOR)
        const results = await User.register({ username, password:`${hashedPassword}`, first_name, last_name, phone })

        console.log('results ', results)
        return res.json(results)
        
    } catch (e) {
        if (e.code === '23505') {
            return next(new ExpressError("Username taken. Please pick another!", 400));
        }
        return next(e)
    }
})


 module.exports = router