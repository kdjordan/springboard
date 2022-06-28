const express = require("express");
const router = new express.Router();
const ExpressError = require("../expressError");
const { ensureLoggedIn, ensureCorrectUser, authenticateJWT } = require("../middleware/auth");

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

router.get('/:id', [authenticateJWT, ensureCorrectUser], async (req, res, next) => {
    try {
        const id  = req.params.id
        console.log('getting mssg', id)
        return res.status(200)
        
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

 router.post('/', (req, res, next) => {
    console.log('in messages')
})

/** POST/:id/read - mark message as read:
 *
 *  => {message: {id, read_at}}
 *
 * Make sure that the only the intended recipient can mark as read.
 *
 **/


 module.exports = router
