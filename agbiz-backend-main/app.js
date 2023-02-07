const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
var cors = require('cors')
var sgMail=require('nodemailer');
const cookieParser = require('cookie-parser');
dotenv.config({path:'./config.env'});
app.use(cookieParser())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const user=require('./src/Models/RegistrationSchema');
require('./src/Database/Connection');
const router = require('./src/Router/route');
app.use(router);
const PORT = process.env.PORT;

app.get('/',async(req,res)=>{
    res.json({"users":['roshan',"kuldeep"]});
})


app.listen(PORT, ()=>{
    console.log("port:",{PORT});
})