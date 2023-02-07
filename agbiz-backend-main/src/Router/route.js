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


//  ------------------------------- user details  route ------------------------------------ //
router.get("/user/update_details", authenticateuser, (req, res) => {
  res.send(req.rootUser);
});
router.put("/user/update_details", async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !phone) {
    return res.status(421).json({ error: "All Field are required" });
  }
  try {
    await user.updateOne({ email: email }, { name, phone, email });
    res.status(201).json("Document updtaed successfully");
  } catch (err) {
    console.log(err);
  }
});

//  ------------------------------- user details  route ------------------------------------ //
router.get("/user/add_appointment", authenticateuser, (req, res) => {
  res.send(req.rootUser);
});

//  ------------------------------- logout user route ------------------------------------ //

router.get("/user/logout", (req, res) => {
  res.clearCookie("jwtoken", { path: "/" });
  res.status(200).json({ message: "logged out succesfully" });
});

// <-------------------------- route to check user login ------------------>

router.get("/checkuserlogin", authenticateuser, async (req, res) => {
  res.send(req.rootUser);
});



// <-------------------------- get current logged user --------------------->

router.get("/user/logged", authenticateuser, (req, res) => {
  res.json({ user: req.rootUser });
});





module.exports = router;
