const mongoose = require('mongoose');

const PricingSchema = new mongoose.Schema({
    service: {
        type:String,
        required:true
    },
    pricestarting: {
        type:String,
        required:true,
    },
    for: {
        type:String,
        required:true,
    }
})

const Price = mongoose.model('pricingform', PricingSchema);

module.exports = Price;