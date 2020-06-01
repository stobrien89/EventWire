const mongoose = require('../db/connection')

const eventSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  price_per_person: String,
  rating: Number,
  tag: [String],
  image: { data: Buffer, contentType: String },
  address: {
    street: String,
    unit: String,
    city: String,
    state: String,
    zip: String,
    country: String
  },
  contact: {
    name: String,
    phone: String,
    email: String
  },
  destination: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Destination',
  }
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event