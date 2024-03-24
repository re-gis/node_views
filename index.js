const express = require("express");
const ejs = require("ejs");
const connectDB = require("./config/db");
const app = express();
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const fs = require('fs')

// connectDB()

app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/signup", (req, res) => {
  res.render("index");
  // console.log(req.body.email);
});

app.get("/login", (req, res) => {
  res.render('login')
})

app.use('/', require('./routes/dataRoute'))

app.listen(1000, () => {
  console.log(`Server running on port 1000...`);
});
