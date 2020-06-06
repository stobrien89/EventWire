const express = require('express');
const router = express.Router();

// Model
const Destinations = require('../models/Destinations.js');

const seedData =
  [
    {
      "tag": [],
      "name": "Las Vegas, NV",
      "description": "Las Vegas has so many entertainment, dining, shopping, nightlife, golf and spa options, it can be tough to choose which experiences are perfect for your trip. Let us help you find deals and save on Las Vegas show tickets, tours, clubs, attractions & more!",
      "image_url": "https://static.datasciencedojo.com/wp-content/uploads/2016/07/lasVegas-1200x600.png"
    },
    {
      "tag": [],
      "name": "Austin, TX",
      "description": "Austin, Texas is the Live Music Capital of the World. Explore the breadth of things to do in Austin, from nightlife to shopping to sightseeing to sports. Find official information on attractions and more.",
      "image_url": "https://www.wideorbit.com/wp-content/uploads/sites/3/2019/05/tabimage-1200x600.jpg"
    },
    {
      "tag": [],
      "name": "New York, NY",
      "description": "NYC is rightfully known for its nightlife. Whether that means sophisticated cocktail dens, friendly dive bars or bottle-service-only dance clubs, the City’s after-dark entertainment is just as electrifying as it ever was. Find out where to drink, dance and listen to music—all around the five boroughs.",
      "image_url": "https://mk0peerspaceresco37i.kinstacdn.com/wp-content/uploads/skyline-4582510_1280-1200x600.jpg"
    },
    {
      "tag": [],
      "name": "Miami, FL",
      "description": "For those looking for the best and most wild times that Florida has to offer, Miami never fails to deliver. Miami is famous for its beautiful people, exclusive clubs, romantic rooftop bars and nonstop parties. With so much to do, you’ll never get bored!",
      "image_url": "https://www.smartertravel.com/uploads/2018/03/Hero-5-1200x600.png"
    },
    {
      "tag": [],
      "name": "Nashville, TN",
      "description": "If you want to add some excitement to your vacation, be sure to check out  Nashville. Take in free live music at one of the many Honky Tonks, sip on a craft cocktail at a rooftop bar, or see one of your favorite bands perform a sell-out show. There’s no wrong way to spend time in Nashville.",
      "image_url": "https://cdn.vox-cdn.com/thumbor/6HBifADI5C9tG_aO9my-3rFa2Wo=/0x55:1700x905/fit-in/1200x600/cdn.vox-cdn.com/uploads/chorus_asset/file/9939405/Broadway_Nashville.jpg"
    },
    {
      "tag": [],
      "name": "Atlanta, GA",
      "description": "Downtown Atlanta is your destination for engaging attractions and world-renowned dining.  Whether you’re into live music, food and wine, sports or family-friendly entertainment, Atlanta events offer non-stop fun for everyone!",
      "image_url": "https://www.atlbrw.com/wp-content/uploads/2017/06/atlanta-1584094_1280-1200x600.jpg"
    },
    {
      "tag": [],
      "name": "Chicago, IL",
      "description": "Chicago knows how to keep the party going — it's the birthplace of house music and Chicago-style jazz, after all. Experience the unforgettable energy of the music and nightlife scene, from late-night dance floors to famous comedy clubs to legendary venues and more.",
      "image_url": "https://www.edgeconnex.com/wp-content/uploads/2019/06/Chicago_iStock-1139456318_Smaller-1200x600.jpeg"
    },
    {
      "tag": [],
      "name": "San Diego, CA",
      "description": "Follow the music to San Diego, where the nightlife is one of the most buzzing scenes on the West Coast. The nightclubs are bumping with world-class DJs, the craft cocktails are true works of art and dance floors are filled with people soaking up the bright vibes of San Diego after sundown.",
      "image_url": "https://mk0peerspaceresco37i.kinstacdn.com/wp-content/uploads/pexels-photo-2157685-1200x600.jpeg"
    }
  ];

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
// add search capability
router.get('/', (req, res) => {
  Destinations.find({}, (err, allDestinations) => {
    // if (err) res.sendStatus(err.statusCode)
    res.json(allDestinations);
  })
})
// test: curl http://localhost:3000/destination

// // SEED
// router.get('/seed', (req, res) => {
//   Destinations.create(seedData, (err, data) => {
//     res.redirect('/');
//   });
// });

// SHOW
router.get('/:id', (req, res) => {
  Destinations.findById(req.params.id, (err, foundDestination) => {
    res.json(foundDestination);
  })
})
// test: curl -X GET -H "Content-Type: application/json" http://localhost:3000/destinations/5ed6d88c7401e216c2d01b9c

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
// test: curl -X POST -H "Content-Type: application/json" -d '{}' http://localhost:3000/destinations


// DELETE
router.delete('/:id', (req, res) => {
  Destinations.findByIdAndRemove(req.params.id, (err, deletedDestination) => {
    res.json(deletedDestination);
  })
})
// test: curl -X DELETE http://localhost:3000/destinations/58f79d490708714536c0

// UPDATE
router.put('/:id', (req, res) => {
  Destinations.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedDestination) => {
    res.json(updatedDestination);
  })
})
// test: curl -X PUT -H "Content-Type: application/json" -d '{}' http://localhost:3000/destinations/5ecdca1bf3c1f0785bee08a3

module.exports = router;