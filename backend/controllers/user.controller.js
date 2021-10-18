const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cryptoJs = require('crypto-js');
require('dotenv').config();

const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create new user
exports.create = (req, res) => {
  const protectEmail = cryptoJs.HmacSHA512(req.body.email,process.env.cleToken).toString(cryptoJs.enc.Base64);
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        jobtitle: req.body.jobtitle,
        email: protectEmail,
        password: hash
      });
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => res.status(400).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));




 
  };

//  connexion de l'utilisateur
exports.login = (req, res, next) => {
  const protectEmail = cryptoJs.HmacSHA512(req.body.email, process.env.cleToken).toString(cryptoJs.enc.Base64)
    User.findOne({ where:{ email: protectEmail} })
      .then(user => {
        if (!user) {
          return res.status(401).json({ error: 'Utilisateur non trouvé !' });
        }
        bcrypt.compare(req.body.password, user.password)
          .then(valid => {
            if (!valid) {
              return res.status(401).json({ error: 'Mot de passe incorrect !' });
            }
            res.status(200).json({
              id: user.id,
              lastname: user.lastname,
              token: jwt.sign(
                { userId: user._id },
                'RANDOM_TOKEN_SECRET',
                { expiresIn: '24h' }
              )
            });
          })
          .catch(error => res.status(500).json({ error }));
      })
      .catch(error => res.status(500).json({ error }));
  };