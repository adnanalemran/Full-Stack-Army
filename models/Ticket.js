const shortid = require("shortid");

class Ticket {
    /**
     * constructor function 
     * @param {string} username - The username of the ticket owner.
     * @param {number} price - The price of the ticket.
     */
  constructor(username, price) {
    this.id = shortid.generate();
    this.username = username;
    this.price = price;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
module.exports = Ticket;
