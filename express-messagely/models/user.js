/** User class for message.ly */

const db = require("../db");
const ExpressError = require("../expressError");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require("../config");

/** User of the site. */

class User {
  /** register new user -- returns
   *    {username, password, first_name, last_name, phone}
   */

  static async register({username, password, first_name, last_name, phone}) { 
    const joinDate = new Date().toISOString()
    const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR)
    const results = await db.query(
      `INSERT INTO users (username, password, first_name, last_name, phone, join_at)
      VALUES ($1, $2, $3, $4, $5, $6)
      RETURNING username, password, first_name, last_name, phone`,
      [username, hashedPassword, first_name, last_name, phone, joinDate])
  
      if(!results) {
        throw new ExpressError(`Error registering User`, 404);
      }

      return results.rows[0]
  }

  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(username, password) {
    const results = await db.query(
      `SELECT username, password 
      FROM users
      WHERE username = $1`,
      [username]);
      
      if(!results) {
        return false
      } else if (await bcrypt.compare(password, results.rows[0].password)) {
        return true
      } else {
        return false
      }
   }

  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) { 
    const loginDate = new Date().toISOString()
    const results = await db.query(
      `UPDATE users 
      SET last_login_at = $1
      WHERE username = $2`, [loginDate, username])
  }

  /** All: basic info on all users:
   * [{username, first_name, last_name, phone}, ...] */

  static async all() { 
      const results = await db.query(
        `SELECT username,
        first_name AS "firstName", 
        last_name AS "lastName",
        phone
        FROM users 
        ORDER BY last_name, first_name`
      )
      return results.rows
  }

  /** Get: get user by username
   *
   * returns {username,
   *          first_name,
   *          last_name,
   *          phone,
   *          join_at,
   *          last_login_at } */

  static async get(username) {
    const results = await db.query(
      `SELECT username,
      first_name AS "firstName", 
      last_name AS "lastName",
      phone
      FROM users 
      WHERE username = $1`, [username])

      const user = results.rows[0];

      if (user === undefined) {
        const err = new Error(`No such user: ${username}`);
        err.status = 404;
        throw err;
      }
      return user;
   }

  /** Return messages from this user.
   *
   * [{id, to_user, body, sent_at, read_at}]
   *
   * where to_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesFrom(username) {
    console.log('getting ', username)
    const results = await db.query(
      `SELECT id, to_username, body, sent_at, read_at
      FROM messages 
      WHERE from_username = $1`, [username])

      return results.rows[0]
  }

  /** Return messages to this user.
   *
   * [{id, from_user, body, sent_at, read_at}]
   *
   * where from_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesTo(username) { 
    const results = await db.query(
      `SELECT id, from_username, body, sent_at, read_at
      FROM messages 
      WHERE to_username = $1`, [username])

      return results.rows[0]
  }
}


module.exports = User;