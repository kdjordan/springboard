/** User class for message.ly */

const db = require("../db");
const ExpressError = require("../expressError");

/** User of the site. */

class User {
  constructor({username, password, first_name, last_name, phone}) {
    this.username = username
    this.password = password
    this.firstName = first_name
    this.lastName = last_name
    this.phone = phone
  }
  /** register new user -- returns
   *    {username, password, first_name, last_name, phone}
   */

  static async register({username, password, first_name, last_name, phone}) { 
   
  }

  /** Authenticate: is this username/password valid? Returns boolean. */

  static async authenticate(username, password) { }

  /** Update last_login_at for user */

  static async updateLoginTimestamp(username) { }

  /** All: basic info on all users:
   * [{username, first_name, last_name, phone}, ...] */

  static async all() { 
    console.log('getting all users')
      const results = await db.query(
        `SELECT username,
        first_name AS "firstName", 
        last_name AS "lastName",
        phone
        FROM users 
        ORDER BY last_name, first_name`
      )
      return results.rows.map(c => new User(c))
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
      WHERE username = $1
      ORDER BY last_name, first_name`, [username])

      const user = results.rows[0];

      if (user === undefined) {
        const err = new Error(`No such user: ${username}`);
        err.status = 404;
        throw err;
      }
      return new User(user);
   }

  /** Return messages from this user.
   *
   * [{id, to_user, body, sent_at, read_at}]
   *
   * where to_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesFrom(username) { }

  /** Return messages to this user.
   *
   * [{id, from_user, body, sent_at, read_at}]
   *
   * where from_user is
   *   {username, first_name, last_name, phone}
   */

  static async messagesTo(username) { }
}


module.exports = User;