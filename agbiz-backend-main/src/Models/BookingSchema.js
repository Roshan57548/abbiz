const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    companyname: {
        type:String,
        required:true
    },
    phone: {
        type:Number,
        required:true,
    },
    date: {
        type:String,
        required:true,
    },
    time: {
        type:String,
        required:true,
    },
    product:[
        String
    ],
    service: {
        type:String
    },
    message: {
        type:String
    }
    
})

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;