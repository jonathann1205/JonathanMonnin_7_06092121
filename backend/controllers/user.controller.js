const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cryptoJs = require('crypto-js');
require('dotenv').config();

const db = require("../models");
const User = db.users;
const Op = db.Sequelize.Op;

// Create new user
exports.create = (req, res) => {
  if(req.body.email === "audrey_dess@hotmail.fr"){
    role = "admin"
  }else {
    role = "user"
  }
  // const protectEmail = cryptoJs.AES.encrypt(req.body.email,process.env.cleToken).toString(cryptoJs.enc.Base64);
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        jobtitle: req.body.jobtitle,
        email: req.body.email,
        role: role,
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
  // const protectEmail = cryptoJs.HmacSHA512(req.body.email, process.env.cleToken).toString(cryptoJs.enc.Base64)
  const email = req.body.email
    User.findOne({ where:{ email} })
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
              role: user.role,
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
//  suprimer le compte user 
  exports.deleteUser = (req, res, next) => {
    const id = req.params.id;
    User.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Utilisateur supprimé!"
          });
        } else {
          res.send({
            message: `Impossible de supprimer id=${id}. `
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Users with id=" + id
        });
      });
  };

  //  recuperer le compte pour la page profils
  exports.getOneUser = (req, res, next) => {
    const id = req.params.id;
  
    User.findByPk(id)
      .then(data => {
        
        res.send(data );
        
        
      })
 
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving user with id=" + id
        });
      });
  }

  //  recupere tout les user pour admin 
exports.getAllUser = (req, res, next) => {
  User.findAll()
     .then(data => {
       res.send(data);
     })
     .catch(err => {
       res.status(500).send({
         message:
           err.message || "Some error occurred while retrieving users."
       });
     });
 };