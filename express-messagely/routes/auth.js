const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");
const User = require('../models/user')

/** POST /login - login: {username, password} => {token}
 *
 * Make sure to update their last-login!
 *
 **/

router.post('/login', async (req, res, next) => {
    try {
        const { username, password } = req.body
        if (!username || !password) {
            throw new ExpressError("Username and password required", 400);
            }

        if(await User.authenticate(username, password)){
             //create token from username and password 
             const _token = jwt.sign({ username:username, password:password }, SECRET_KEY)
             //update last login
             await User.updateLoginTimestamp(username)
             //return user object to front end
             return res.json({ message: `Logged in!`, _token })
        }

    } catch (e) {
        return next(e)
    }
})


/** POST /register - register user: registers, logs in, and returns token.
 *
 * {username, password, first_name, last_name, phone} => {token}.
 *
 *  Make sure to update their last-login!
 */

 router.post('/register', async (req, res, next) => {
    try {
        let { username, password, first_name, last_name, phone } = req.body
        if(!username || !password || ! first_name || !last_name || !phone) {
            throw new ExpressError('Invalid Input !')
        }

        const user = await User.register({ username, password, first_name, last_name, phone })

        if(user && await User.authenticate(username, password)) {
            //create token from username and password 
            const _token = jwt.sign({ username:username, password:password }, SECRET_KEY)
            //update last login
            await User.updateLoginTimestamp(user.username)
            //return user object to front end
            return res.json({ message: `Registered and logged in!`, _token })
        }
        
    } catch (e) {
        if (e.code === '23505') {
            return next(new ExpressError("Username taken. Please pick another!", 400));
        }
        return next(e)
    }
})


 module.exports = router