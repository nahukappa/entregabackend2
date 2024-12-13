const ticketDAO = require('../daos/ticketDAO');

class TicketService {
  async createTicket(ticketData) {
    return await ticketDAO.create(ticketData);
  }
}

module.exports = new TicketService();
