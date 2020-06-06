const express = require('express');
const router = express.Router();

// Model
const Events = require('../models/Events.js');
const Destinations = require('../models/Destinations.js');

const seedData = [
  {
    "name": "Wine & Cheese Cruise",
    "type": "Attraction",
    "description": "Relax with a glass of wine and take in the evening views of the Chicago skyline! Enjoy sweet and savory wine and cheese pairings while cruising Lake Michigan and the Chicago River. Must be 21+.",
    "start_date": "Thursday July 2 @ 10:45 pm",
    "end_date": "Friday July 3 @ 12:45 am",
    "price_per_person": "60",
    "image_url": "https://cdn.choosechicago.com/uploads/2020/03/Wendella_WineandCheese_UrkodC_Website-Resolution-090-900x601.jpg",
    "address": {
      "street": "400 N. Michigan Ave.",
      "city": "Chicago",
      "state": "IL",
      "zip": "60611",
      "country": "US"
    },
    "google_map": "https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=400+N.+Michigan+Ave.+Chicago+IL+60611+United+States",
    "destination_name": "Chicago, IL"
  },

  {
    "name": "RHYTHM & BRUNCH: A BRUNCH PARTY EXPERIENCE",
    "type": "Attraction",
    "description": "Chicago’s #1 Sunday Brunch & Day Party. Menu Includes An Omelet Station + Chicken & Waffles + Shrimp & Grits + Crab Legs**+ More! R&B, Soul & Classic Hip-Hop Soundtracks By DJs. Brunch costs $40 plus tax (11.5%) and service fees (18%), for a total of $51.80. [RATED \"M\": For MATURE AUDIENCES, Ages 35 & Older Only]",
    "start_date": "Sunday June 7 @ 10:00 am",
    "end_date": "Sunday June 7 @ 4:00 pm",
    "price_per_person": "51.80",
    "image_url": "https://cdn.evbuc.com/eventlogos/320313991/rhythmandbrunchgenericeflyer.png",
    "address": {
      "street": "1315 S. Halsted",
      "city": "Chicago",
      "state": "IL",
      "zip": "60607",
      "country": "US"
    },
    "google_map": "https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=1315+S.+Halsted+St.+Chicago+IL+60607+United+States",
    "contact": {
      "name": "BRACKET ROOM",
      "phone": "(312) 226-8010",
      "email": "Events@BracketRoomChicago.com"
    },
    "destination_name": "Chicago, IL"
  },

  {
    "name": "Chicago Margarita Crawl",
    "type": "Things To Do",
    "description": "Multiple Venues! Discounted Drinks at all venues! Free take-home giveaways limited quantities. Create memories that will last a lifetime! You must have a ticket be a part of the crawl and enjoy the benefits. Wristbands will be checked at all venues. 21+ event, photo ID required all day. THIS EVENT IS 100% RAIN OR SHINE",
    "start_date": "Saturday October 17 @ 2:00 pm CDT",
    "end_date": "Saturday October 17 @ 8:00 pm CDT",
    "price_per_person": "39.99",
    "image_url": "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F79514657%2F306696524004%2F1%2Foriginal.20191105-183735?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C64%2C2048%2C1024&s=e664023ddae9b1effd190876a3e5a2f1",
    "address": {
      "street": "",
      "city": "Chicago",
      "state": "IL",
      "zip": "",
      "country": "US"
    },
    "google_map": "https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Downtown+Chicago+IL+60607+United+States",
    "contact": {
      "name": "Bar Crawl Unlimited",
      "phone": "",
      "email": ""
    },
    "destination_name": "Chicago, IL"
  },

  {
    "name": "Open Mic - Comedy",
    "type": "Things To Do",
    "description": "Voted best Comedy Open Mic in Atlanta. Come See 15 Comedians...(you are bound to like at least a few of them!) Local Atlanta comedians and visiting national comedians working on their craft. You'll see people doing jokes for the first time, expanding on current jokes, and some times just plain eating it... which is also pretty awesome! Door Time: 7:30 PM. Restrictions: 21 & over. Two drink minimum.",
    "start_date": "Wednesday June 24 @ 8:00 pm",
    "end_date": "Wednesday June 24 @ 11:00 pm",
    "price_per_person": "12.50",
    "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1LtMJDbSjOjtiuOjocJxbV7XuDGPREEBu4xeYcBidt49hTS4i&usqp=CAU",
    "address": {
      "street": "878 Peachtree Street",
      "city": "Atlanta",
      "state": "GA",
      "zip": "30309",
      "country": "US"
    },
    "google_map": "https://maps.google.com/maps?f=q&source=s_q&hl=en&geocode=&q=Downtown+Chicago+IL+60607+United+States",
    "contact": {
      "name": "Laughing Skull Lounge",
      "phone": "(404) 369-1017",
      "email": "whatup@laughingskulllounge.com"
    },
    "destination_name": "Atlanta, GA"
  },

]

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
  if (req.query.d) {
    Events.find({ destination: req.query.d }, (err, filteredEvents) => {
      res.json(filteredEvents);
    })
  } else {
    Events.find({}, (err, allEvents) => {
      res.json(allEvents);
    })
  }
})
// test: curl http://localhost:3000/event

// // SEED
router.get('/seed', (req, res) => {
  Events.create(seedData, (err, data) => {
    data.map((event) => {
      Destinations.find({ name: event.destination_name }, (err, foundDestination) => {
        return foundDestination;
      }).then((foundDestination) => {
        Events.findByIdAndUpdate(
          event._id,
          { $set: { destination: foundDestination[0]._id } },
          { new: true },
          (err, updatedEvent) => { }
        )
      })
    })
    res.redirect('/events');
  })
});

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