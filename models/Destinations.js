const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tag: [String],
  image_url: String,
  image: { data: Buffer, contentType: String },
})

const Destination = mongoose.model('Destination', destinationSchema)

module.exports = Destination;