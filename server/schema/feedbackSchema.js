const mongoose = require('mongoose')
module.exports = mongoose.model('data', new mongoose.Schema({
    name: String,
    email: String,
    subject: String,
    query: String,
    image: String,
    number: Number,
    selection: String
}))