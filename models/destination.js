const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema({
  name: String,
  description: String,
  tag: [String],
  image: { data: Buffer, contentType: String },
})

const Destination = mongoose.model('Destination', destinationSchema)

module.exports = Destination;