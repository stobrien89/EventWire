const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itinerarySchema = new Schema ({
    name:String,
    occasion: String,
    groupSize: Number,
    startDate: String,
    endDate: String,
    Destination: String,
    events: Array,
    followers: Array,
    url: String,
    status: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',
      }
    
})

const Itinerary = mongoose.model('Itinerary', itinerarySchema);

module.exports = Itinerary;