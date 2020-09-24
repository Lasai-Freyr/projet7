const express = require('express');
const bodyParser = require('body-parser');
const helmet = require("helmet");
const sql = require('./models/db');



const path = require('path');

const dotenv = require('dotenv').config();
//const rateLimiter = require("./middleware/rateLimiter");

const postsRoutes = require('./routes/post.js');
const userRoutes = require('./routes/user.js');
const { Sequelize } = require('sequelize');

//const sequelize = new Sequelize('database', 'username', 'password', {
  //  host: 'localhost',
  //  dialect:   'mysql'
  //});

const app = express();
app.use(helmet());
//app.use(rateLimiter);
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());
//app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/posts', postsRoutes); 
app.use('/api/auth', userRoutes);
console.log("bonjour à tous");
const db = require("./models");
db.sequelize.sync();
console.log("123");

module.exports = app;