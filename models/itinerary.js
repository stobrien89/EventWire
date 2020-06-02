const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const intinerarySchema = new Schema ({
    name:String,
    occasion: Array,
    groupSize: Number,
    startDate: String,
    endDate: String,
    Destination: String,
    events: Array,
    followers: Array,
    url: String,
    status: String
})

const Itinerary = mongoose.model('Itinerary', intinerarySchema);

module.exports = Itinerary;