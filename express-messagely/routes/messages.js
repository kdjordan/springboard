const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const { ensureLoggedIn } = require("../middleware/auth");
const Message = require('../models/message')

/** GET /:id - get detail of message.
 *
 * => {message: {id,
 *               body,
 *               sent_at,
 *               read_at,
 *               from_user: {username, first_name, last_name, phone},
 *               to_user: {username, first_name, last_name, phone}}
 *
 * Make sure that the currently-logged-in users is either the to or from user.
 *
 **/

router.get('/:id', ensureLoggedIn, async (req, res, next) => {
    console.log(req.user)
    try {
        let username  = req.user.username
        let mssg = await Message.get(req.params.id)

        if (mssg.to_user.username !== username && mssg.from_user.username !== username) {
            throw new ExpressError("Cannot read this message", 401);
          }
        return res.status({message: { mssg }})
        
    } catch (e) {
        return next(e)
    }
})


/** POST / - post message.
 *
 * {to_username, body} =>
 *   {message: {id, from_username, to_username, body, sent_at}}
 *
 **/

 router.post('/', ensureLoggedIn, async (req, res, next) => {
    try {
        let results = await Message.create(req.body)
        return res.json({message: results})
    } catch (e) {
        return next(e)
    }
})

/** POST/:id/read - mark message as read:
 *
 *  => {message: {id, read_at}}
 *
 * Make sure that the only the intended recipient can mark as read.
 *
 **/
 router.post('/:id/read', ensureLoggedIn, async (req, res, next) => {
    console.log('runnin')
    try {
        let { username } = req.user
        let mssg = await Message.markRead(req.params.id)

        if (msg.to_user.username !== username) {
            throw new ExpressError("Cannot set this message to read", 401)
        }

        res.json({ message })
    } catch (e) {
        return next(e)
    }
})


 module.exports = router
