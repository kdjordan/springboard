const express = require("express");
const router = new express.Router();

const { ensureLoggedIn, ensureCorrectUser  } = require("../middleware/auth");
const User = require("../models/user")

/** GET / - get list of users.
 *
 * => {users: [{username, first_name, last_name, phone}, ...]}
 *
 **/

router.get('/', ensureLoggedIn, async (req, res, next) => {
    try {
        const users = await User.all()
        return res.json({ users })
    } catch (e) {
        return next(e)
    }
})

/** GET /:username - get detail of users.
 *
 * => {user: {username, first_name, last_name, phone, join_at, last_login_at}}
 *
 **/

 router.get('/:username', ensureCorrectUser, async (req, res, next) => {
    try {
        const user = await User.get(req.params.username)
        return res.json({ user })
    } catch (e) {
        return next(e)
    }
})


/** GET /:username/to - get messages to user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 from_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/

 router.get('/:username/to', ensureCorrectUser,  async (req, res, next) => {
    try {
        const mssgs = await User.messagesTo(req.params.username)
        if(mssgs) {
            const user = await User.get(mssgs.from_username)
            delete mssgs.from_username
            return res.json({mssgs, from_user:user})
        } 
        return res.json({ messages: `No messages to ${req.params.username}` })
        
    } catch (e) {
        return next(e)
    }
})


/** GET /:username/from - get messages from user
 *
 * => {messages: [{id,
 *                 body,
 *                 sent_at,
 *                 read_at,
 *                 to_user: {username, first_name, last_name, phone}}, ...]}
 *
 **/
 router.get('/:username/from', ensureCorrectUser,  async (req, res, next) => {
    try {
        const mssgs = await User.messagesFrom(req.params.username)
        return res.json({ mssgs })
        
        } catch (e) {
            return next(e)
        }
})

module.exports = router
