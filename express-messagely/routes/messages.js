const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const { ensureLoggedIn, ensureCorrectUser, authenticateJWT } = require("../middleware/auth");
const Message = require('../models.messages')

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

router.get('/:id', ensureCorrectUser, async (req, res, next) => {
    try {
        let result = await Message.get(req.params.id)
        console.log('getting mssg', id)
        return res.status({message: { result }})
        
    } catch (error) {
        throw new ExpressError(`Error getting message ${id}`, 404);
    }
})


/** POST / - post message.
 *
 * {to_username, body} =>
 *   {message: {id, from_username, to_username, body, sent_at}}
 *
 **/

 router.post('/', async (req, res, next) => {
    try {
        let results = await Message.create(req.body)
        return res.json({message: {results}})
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
 router.post('/:id/read', ensureCorrectUser, async (req, res, next) => {
    try {
        let result = await Message.markRead(req.params.id)
        res.json({message: result})
    } catch (e) {
        return next(e)
    }
})


 module.exports = router
