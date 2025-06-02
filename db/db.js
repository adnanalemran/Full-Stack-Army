const Ticket = require("../models/ticket");
class MyDB {
  constructor() {
    this.tickets = [];
  }
  // returns the ticket object (all ticket properties)
  find() {
    return this.tickets;
  }
  // returns the ticket object (  ticket properties)
  findById(id) {
    return this.tickets.find((ticket) => ticket.id === id);
  }

 /**
  * Create and save a new ticket 
  * @param {string} username 
  * @param {number} price 
  * @returns 
  */
  create(username, price) {
    const ticket = new Ticket(username, price);
    this.tickets.push(ticket);
    return ticket;
  }
  

  //sell multiple tickets
  bulkCreate(tickets) {
    const createdTickets = tickets.map((ticket) => {
      const newTicket = new Ticket(ticket.username, ticket.price);
      this.tickets.push(newTicket);
      return newTicket;
    });
    return createdTickets;
  }

  // returns the ticket object (  ticket properties)
  udateById(id, data) {
    const ticket = this.findById(id);
    if (ticket) {
      Object.assign(ticket, data);
      ticket.updatedAt = new Date();
      return ticket;
    }
    return null;
  }
  // returns the ticket object (  ticket properties)
  deleteById(id) {
    const index = this.tickets.findIndex((ticket) => ticket.id === id);
    if (index !== -1) {
      return this.tickets.splice(index, 1)[0];
    }
    return null;
  }
  //drows a random ticket from the tickets array
  draw() {
    if (this.tickets.length === 0) {
      return null;
    }
    const randomIndex = Math.floor(Math.random() * this.tickets.length);
    return this.tickets[randomIndex];
  }
}

const MyDB = new MyDB();
module.exports = MyDB;
