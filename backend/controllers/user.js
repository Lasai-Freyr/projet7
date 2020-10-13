const bcrypt = require('bcrypt');
const  User = require('../models/User');


const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        address: req.body.address,
        password: hash,
        name: req.body.name
      });
      User.saveUser(user, (err) => {
        if (err) {
          res.status(500).send({message: 'Une erreur s\'est produite'});
        }
        else {
          res.status(201).send({ message: 'Post enregistré !'})
        }
      })
  } )  
}
  

exports.login = (req, res, next) => {
  console.log("bidule", req.body);
  const user = req.body;
  const userId = req.body.address;
  User.findAnUser(userId,(err,data) => {
    console.log("bidule2");
    if (err ||data.length == 0) {
      console.log("bidule3");
      return res.status(401).json({ error: 'Utilisateur non trouvé !' });

    } else {
      console.log("bidule4");
      const userData = data[0];
      bcrypt.compare( user.password, userData.password)
      .then(valid => {
          if (!valid) { console.log("bidule5");
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
      }console.log("bidule6");
      res.status(200).json({ 
          userId: userData.id,
          token: jwt.sign(
            { userId: userData.id},
            '753215846392576321586015406875',
            { expiresIn: '24h' }            
            )
          });
      })
      if (err) {
        res.status(500).json({ error });   
      }
    }
  });
}

exports.findUser = ( req, res, next) => {
  const userId = req.params.id;
  User.findAnUser(userId,(err, data) => {
    if (err) {
      res.status(500).send({message: 'Une erreur s\'est produite'});
    } 
    else { 
      res.status(200).send(data)
    }
    })
};

exports.delteteAccount = (req, res, next) => {
  const userId = req.params.id;
  User.deleteUser(userId,(err) => {
    if (err)  {
      res.status(400).send({message: 'Une erreur s\'est produite en supprimant'});
    } 
    else {
      res.status(200).send({ message: 'utilisateur supprimé supprimé !'});
    }
  })
}