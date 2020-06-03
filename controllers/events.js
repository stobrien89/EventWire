const express = require('express');
const router = express.Router();

// Model
const Events = require('../models/Events.js');

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
  Events.find({}, (err, allEvents) => {
    res.json(allEvents);
  })
})
// test: curl http://localhost:3000/event

// SHOW
router.get('/:id', (req, res) => {
  Events.findById(req.params.id, (err, foundEvent) => {
    res.json(foundEvent);
  })
})
// test: curl -X GET -H "Content-Type: application/json" http://localhost:3000/event/58f79d490708714536c0

/*******************************
 * Functional Routes - perform functions in the browser (http verb)
 * ORDER DOESN'T MATTER BECAUSE DIFF HTTP VERBS
 * Create: Creates a new resources [POST]
 * Delete/Destroy: Deletes a resource [DELETE]
 * Update: Updates a resource [PUT]
 */

// CREATE
router.post('/', (req, res) => {
  Events.create(req.body, (err, createdEvent) => {
    res.json(createdEvent);
  })
})
// test: curl -X POST -H "Content-Type: application/json" -d '{}' http://localhost:3000/event


// DELETE
router.delete('/:id', (req, res) => {
  Events.findByIdAndRemove(req.params.id, (err, deletedEvent) => {
    res.json(deletedEvent);
  })
})
// test: curl -X DELETE http://localhost:3000/event/58f79d490708714536c0

// UPDATE
router.put('/:id', (req, res) => {
  Events.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedEvent) => {
    res.json(updatedEvent);
  })
})
// test: curl -X PUT -H "Content-Type: application/json" -d '{}' http://localhost:3000/event/5ecdca1bf3c1f0785bee08a3

module.exports = router;