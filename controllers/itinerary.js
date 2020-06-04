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
            destination: "Austin",
            events: ["E Arroyo", "Barton Springs", "Amy's Ice Cream","Rainey Street"],
            followers: ["Jeff", "Mike", "Susan"],
            url: "https://www.eventwire.com",
            status: "Active",
            user: '5ed6fa6a19daa925f4d273b0'
        },
        {
            name:"Test Itinerary 2",
            occasion: "Bachelor Party",
            groupSize: 7,
            startDate: "7-6-20",
            endDate: "7-10-20",
            destination: "Las Vegas",
            events: ["MGM Grand", "Tank Driving", "Golf"],
            followers: ["Jeff", "Mike", "Sam"],
            url: "https://www.eventwire.com",
            status: "purchased",
            user: '5ed6fa6a19daa925f4d273b0'
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

// Show Route
router.get('/:id', (req, res)=>{
    Itinerary.findById(req.params.id, req.body, (err, data)=>{
        res.json(data);
    })
})

// Create Route
router.post('/', (req, res)=>{
    Itinerary.create(req.body, (err, createdItinerary)=>{
        res.json(createdItinerary);
    });
});

// Put Route
router.put('/:id', (req, res)=>{
    Itinerary.findByIdAndUpdate(req.params.id, req.body, (err, data)=>{
        res.json(data);
    })
})




// Delete Route
router.delete('/:id', (req, res)=>{
    Itinerary.findByIdAndDelete(req.params.id, (err, deletedItinerary)=>{
        res.json(deletedItinerary);
    });
})


module.exports = router;