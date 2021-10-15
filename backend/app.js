const express = require('express');
const path = require('path');
// var cors = require('cors')
require('dotenv').config();


const db = require("./models");

// var corsOptions = {
//   origin: "http://localhost:8080"
// };

// app.use(cors(corsOptions));


// const postRoutes = require('./routes/post');
const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');


// connection a la base de donnée
db.sequelize.sync();

const app = express();

//  autorisation et reglage des parametre cors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


  app.use(express.json())

  app.use('/images', express.static(path.join(__dirname, 'images')));
//  mettre les route post pour teste

  app.use('/api/auth', userRoutes);
  app.use('/api/post', postRoutes);

  



module.exports = app;