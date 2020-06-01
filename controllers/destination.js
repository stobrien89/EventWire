const express = require('express');
const router = express.Router();

// Model
const Destination = require('../models/destination.js');

/*******************************
 * Presentational Routes - routes that show us something in the browser (ALL GET REQUESTS)
 * IF METHOD IS SAME HTTP VERB (GET) THEN ORDER MATTERS
 * Index: Shows a list of all of our resources and has links to New, Edit and Delete
 * New(CREATE): Shows a form to create a new resource linked to Create
 * 
 * Seed: adds an array of dummy data to app (only run once) before show route
 * 
 * Show: Shows one individual resource from our list
 * Edit(UPDATE): Shows a form to update an individual resource linked to Update Route
 */

// INDEX 

router.get('/', (req, res) => {
  Destinations.find({}, (err, allDestinations) => {
    res.json(allDestinations);
  })
})
// test: curl http://localhost:3000/destination

// SHOW
router.get('/:id', (req, res) => {
  Destinations.findById(req.params.id, (err, foundDestination) => {
    res.json(foundDestination);
  })
})
// test: curl -X GET -H "Content-Type: application/json" http://localhost:3000/destination/58f79d490708714536c0

/*******************************
 * Functional Routes - perform functions in the browser (http verb)
 * ORDER DOESN'T MATTER BECAUSE DIFF HTTP VERBS
 * Create: Creates a new resources [POST]
 * Delete/Destroy: Deletes a resource [DELETE]
 * Update: Updates a resource [PUT]
 */

// CREATE
router.post('/', (req, res) => {
  Destinations.create(req.body, (err, createdDestination) => {
    res.json(createdDestination);
  })
})
// test: curl -X POST -H "Content-Type: application/json" -d '{}' http://localhost:3000/destination


// DELETE
router.delete('/:id', (req, res) => {
  Destinations.findByIdAndRemove(req.params.id, (err, deletedDestination) => {
    res.json(deletedDestination);
  })
})
// test: curl -X DELETE http://localhost:3000/destination/58f79d490708714536c0

// UPDATE
router.put('/:id', (req, res) => {
  Destinations.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedDestination) => {
    res.json(updatedDestination);
  })
})
// test: curl -X PUT -H "Content-Type: application/json" -d '{}' http://localhost:3000/destination/5ecdca1bf3c1f0785bee08a3

module.exports = router;