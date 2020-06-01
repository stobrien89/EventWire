//WORK STILL NEEDED TO CONFIGURE AUTH IN USER ROUTE

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema ({
    login: {
        email: String,
        password: String,
    },
    contact: {
        name: String,
        address: String,
        phone: Number,
    },
    image: String,
    admin: Boolean,
    cart: {},
    history: {}
})

//Generates hash for user password
userSchema.methods.generateHash = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(8));

//returns boolean to indicate whether or not a user has provided correct info. 
//NOTE: this was not working, so the login strategy was modified to perform the same function.  May need to modify again

// userSchema.methods.validPassword = (password) => bcrypt.compareSync(password, this.password);


const Users = mongoose.model('Users', userSchema);

module.exports = Users;
