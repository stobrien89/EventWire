//Dependencies
const express = require('express');
const mongoose = require('mongoose');
const parser = require('body-parser');
const cors = require('cors');
const passport = require('./config/passport.js')();
const path = require('path');

//Environment
const app = express();
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/project3';
const port = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(passport.initialize());
app.use(cors());
app.use(parser.json())
app.use(express.static('public'));

//Mongo Connection 
mongoose.connect(mongoURI, { useNewUrlParser: true }, () => {
    console.log("Mongo DB is connected", mongoURI);
});

//DB error/success messages
mongoose.connection.on('error', err => console.log(err.message));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));

// Controllers
const userController = require('./controllers/users');
const destinationController = require('./controllers/destinations');
const itineraryController = require('./controllers/itinerary');
const eventController = require('./controllers/events');

// Routes
app.use('/users', userController);
app.use('/destinations', destinationController);
app.use('/itinerary', itineraryController);
app.use('/events', eventController);
app.get('*', (req, res)=>{
    res.sendFile(path.join(`${__dirname}/public/index.html`))
})

//Listener
app.listen(port, console.log(`listening on ${port}`));
