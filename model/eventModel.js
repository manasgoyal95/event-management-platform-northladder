const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
    id: String,
    eventName: String,
    eventDate: Date,
    organizer: String,
    email: String,
    phone: String,
    location: {
        street: String,
        city: String,
        state: String,
        zip: String
    },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
},{timestamps:true})


module.exports = mongoose.model('event',eventSchema)