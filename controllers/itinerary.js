const express = require('express');
const router = express.Router();
const Itinerary = require('../models/itinerary.js');

// Seed
router.get('/seed', (req, res)=>{
    Itinerary.create([
        {
            name:"Test Itinerary 1",
            occasion: "Birthday Party",
            groupSize: 10,
            startDate: "6-29-20",
            endDate: "7-10-20",
            Destination: "Austin",
            events: ["E Arroyo", "Barton Springs", "Amy's Ice Cream","Rainey Street"],
            followers: ["Jeff", "Mike", "Susan"],
            url: "https://www.eventwire.com",
            status: "Active"
        },
        {
            name:"Test Itinerary 2",
            occasion: "Bachelor Party",
            groupSize: 7,
            startDate: "7-6-20",
            endDate: "7-10-20",
            Destination: "Las Vegas",
            events: ["MGM Grand", "Tank Driving", "Golf"],
            followers: ["Jeff", "Mike", "Sam"],
            url: "https://www.eventwire.com",
            status: "purchased"
        }

    ], (err, data)=>{
        res.redirect('/itinerary');
    })
});

// Index Route
router.get('/', (req, res)=>{
    Itinerary.find({}, (err, foundItineraries)=>{
        res.json(foundItineraries);
    });
});


module.exports = router;