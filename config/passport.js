const passport = require('passport');
const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const Strategy = passportJWT.Strategy;

const config = require('./config');

const Users = require('../models/Users');

const params = {
    secretOrKey: config.jwtSecret, 
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
}

module.exports = function() {
    const strategy = new Strategy(params, (payload, callback) => {
        const user = Users.findById(payload.id) || null
        if (user) {
            return callback(null, {
                id: user.id
            })
        } else {
            return callback(new Error(`User not found`), null)
        }
    })
    passport.use(strategy)
    return{
        initialize: function() {
            return passport.initialize()
        },
        authenticate: function() {
            return passport.authenticate('jwt', {session: false})
        }
    }
}