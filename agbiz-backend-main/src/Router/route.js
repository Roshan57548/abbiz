const express = require("express");
const router = express.Router();
var cors = require("cors");
const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sgMail = require("nodemailer");
const sweetalert = require("sweetalert");
const nodemailer = require("nodemailer");
const authenticateuser = require("../Middleware/AuthenticateUser");

// -------- Database Connected --------------
require("../Database/Connection");
// --------Database Registration User Schema --------------
const user = require("../Models/RegistrationSchema");
// --------Database Contact Us Schema --------------
const contactform = require("../Models/ContactUsSchema");
// --------Database Price Schema --------------
const pricing = require("../Models/PrizingSchema");
// --------Database booking Schema --------------
const booking = require("../Models/BookingSchema");

//  ------------------------------- registration user route ------------------------------------ //
router.post("/registration_user", async (req, res) => {
  const { name, email, phone, password, confirm_password } = req.body;
  console.log(name, email, phone, password, confirm_password)
  if (!name || !email || !phone || !password || !confirm_password) {
    return res.status(421).json({ error: "All Field are required" });
  }

  try {
    const userExist = await user.findOne({ email: email }); //checking if user exists already

    if (userExist) {
      res.status(422).json({ error: "User already exist" });
    } else if (password !== confirm_password) {
      res.status(423).json({ error: "Passwords does not match correctly" });
    } else {
      const registered_user = new user({
        name,
        email,
        phone,
        password,
        cpassword: confirm_password,
      }); //make user object

      await registered_user.save(); // storing user in database
      var transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        secureConnection: false,
        auth: {
          user: "agbizdev01@gmail.com",
          pass: process.env.PASS,
        },
      });

      var option = {
        from: "agbizdev01@gmail.com",
        to: email,
        subject: "Registration Successfull",
        html: `<div>
        <p>Dear ${name}</p>
        <p>Congratulations, your account has been successfully created.</p>
        <p>If you experience any issues logging into your account, reach out to us at connect@agbiztech.in.</p>
        <p>Regards,</p>
        <p><strong>Team AGBIZ</strong></p>
        </div>`,
      };

      transporter.sendMail(option, (err, info) => {
        if (err) {
          console.log("Error Occurs");
        } else {
          console.log("Email sent successfully");
        }
      });
      res.status(201).json({ message: "user registered successfully" });
    }
  } catch (err) {
    console.log(err);
  }
});


//  ------------------------------- Login user route ------------------------------------ //

router.post("/login_user", async (req, res) => {
  try {
    let token;
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Plz Filled the data" });
    }
    const userLogin = await user.findOne({ email: email });

    if (userLogin) {
      const isMatch = await bcrypt.compare(password, userLogin.password);
      // flag-1  (need to check)

      if (!isMatch) {
        res.status(400).json({ error: "Invalid Credential" });
      } else {
        token = await userLogin.generateAuthtoken();
        console.log(token);
        res.cookie("jwtoken", token, {
          expires: new Date(Date.now() + 5184000),
          httpOnly: true,
        });
        res.json({ message: "user signin successfully" });
      }
    } else {
      res.status(404).json({ error: "Invalid Credential" });
    }
  } catch (err) {
    console.log(err);
  }
});

//  ------------------------------- contact us route ------------------------------------ //
router.post("/contact_form", async (req, res) => {
  const { name, companyname, phone } = req.body;
  if (!name || !companyname || !phone) {
    return res.status(421).json({ error: "All Field are required" });
  }
  try {
    const contact_data = new contactform({
      name,
      companyname,
      phone
    });
    await contact_data.save();
    var transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      secureConnection: false,
      auth: {
        user: "agbizdev01@gmail.com",
        pass: process.env.PASS,
      },
    });

    var option = {
      from: "agbizdev01@gmail.com",
      to: "agbizdev01@gmail.com",
      subject: `${name} wants to contact you!`,
      html: `<div>
      <p>Dear AGBIZ,</p>
      <p>Kindly contact with <strong>${name}</strong>.</p>
      <ul>
          <li>Company <strong>${companyname}</strong></li>
          <li>Mobile No. <strong>${phone}</strong></li>
      </ul>
      <p>Regards,</p>
      <p><strong>${name}</strong></p>
      </div>`,
    };

    transporter.sendMail(option, (err, info) => {
      if (err) {
        console.log("Error Occurs");
      } else {
        console.log("Email sent successfully");
      }
    });
    res.status(201).json({ message: "message sent successfully" });
  } catch (err) {
    console.log(err);
  }
});

// <--------------------------- find pricing data --------------------->
router.get("/pricingdata", async (req, res) => {
  try {
    const result = await pricing.find();
    res.status(201).json({ data: result });
  } catch (err) {
    console.log(err);
  }
});

//  ------------------------------- booking user route ------------------------------------ //
router.post("/booking", async (req, res) => {
  const { name, companyname, phone, date, time, product, service, message } = req.body;
  if (!name || !companyname || !phone || !date || !time || !product ) {
    return res.status(421).json({ error: "All Field are required" });
  }

  try {
      const booking_user = new booking({
        name, companyname, phone, date, time, product, service, message
      });

      await booking_user.save();
      var transporter = nodemailer.createTransport({
        service: "gmail",
        port: 465,
        secure: true,
        secureConnection: false,
        auth: {
          user: "agbizdev01@gmail.com",
          pass: process.env.PASS,
        },
      });
  
      var option = {
        from: "agbizdev01@gmail.com",
        to: "agbizdev01@gmail.com",
        subject: `Product & Service Booked`,
        html: `<div>
        <p>Dear AGBIZ,</p>
        <p>Kindly contact with <strong>${name}</strong>.</p>
        <ul>
            <li>Company : <strong>${companyname}</strong></li>
            <li>Mobile No. : <strong>${phone}</strong></li>
            <li>Date : <strong>${date}</strong></li>
            <li>Time : <strong>${time}</strong></li>
            <li>Product & Service : <strong>${product}</strong></li>
            <li>Other Services : <strong>${service}</strong></li>
            <li>Message : <strong>${message}</strong></li>
        </ul>
        <p>Regards,</p>
        <p><strong>${name}</strong></p>
        </div>`,
      };
  
      transporter.sendMail(option, (err, info) => {
        if (err) {
          console.log("Error Occurs");
        } else {
          console.log("Email sent successfully");
        }
      });
      res.status(201).json({ message: "user registered successfully" });
    }
  catch (err) {
    console.log(err);
  }
});



module.exports = router;
