const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: String,
  description: {
    type: String,
    required: true
  },
  start_date: String,
  end_date: String,
  price_per_person: String,
  rating: {
    type: Number,
    default: 0,
  },
  tag: [String],
  image_url: String,
  image: { data: Buffer, contentType: String }, // this will be for image upload if time permits
  address: {
    street: String,
    unit: String,
    city: String,
    state: String,
    zip: String,
    country: String
  },
  google_map: String,
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