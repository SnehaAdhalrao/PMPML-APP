// models/Ticket.js
const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
  date: String,
  startingStop: String,
  endingStop: String,
  ticketType: String,
  price: Number,
  ticketCount: Number,
  paymentMethod: String,
});

module.exports = mongoose.model('Ticket', TicketSchema);
