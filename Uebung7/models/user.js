const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    role: String
});

module.exports = mongoose.model('User', schema);
