const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name : { type: String, required: true},
    lastname: {  type: String, required: true},
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true },
    isAdmin: { type: Boolean }
});

const User = mongoose.model('User', userSchema);

module.exports = User;