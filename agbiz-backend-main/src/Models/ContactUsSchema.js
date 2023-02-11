const mongoose = require('mongoose');

const ContactUsSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    companyname: {
        type:String,
        required:true,
    },
    phone: {
        type:Number,
        required:true,
    }
    
})


const Contact = mongoose.model('Contactform', ContactUsSchema);

module.exports = Contact;