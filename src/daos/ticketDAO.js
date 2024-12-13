const Ticket = require('../models/ticketModel');

class TicketDAO {
  async create(ticketData) {
    return await Ticket.create(ticketData);
  }

  async findById(ticketId) {
    return await Ticket.findById(ticketId);
  }
}

module.exports = new TicketDAO();
