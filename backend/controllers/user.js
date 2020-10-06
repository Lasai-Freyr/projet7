const bcrypt = require('bcrypt');
const  User = require('../models/User');
//const Op = db.Sequelize.Op;


const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
  console.log("kilua");
  console.log(req.body.name);
  console.log(req.body);
  console.log(req.body.password);
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      console.log("Gon");
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
  const user = req.body;
  const userAd = req.body.address;
  console.log("req.body", req.body);
  User.findUser(userAd,(err,data) => {
    if (err ||data.length == 0) {
      console.log("adresse fausse");
      return res.status(401).json({ error: 'Utilisateur non trouvé !' });

    } else {

      console.log("vérif mot de passe");
      console.log(req.body.password);
      console.log(user.password);
      console.log("***********");
      
      console.log("data", data);  
      const userData = data[0];
      console.log(userData);
      console.log(userData.password);
      bcrypt.compare( user.password, userData.password)
      .then(valid => {
          if (!valid) {
            console.log("mdp faux");
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
      }
      console.log("mdp correct");
      res.status(200).json({
          userId: user.id,
          token: jwt.sign(
            { userId: user.id},
            'RANDOM TOKEN_SECRET',
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

exports.delteteAccount = (req, res, next) => {
  const userAd = req.body;
  console.log("req.params", req);
  User.findUser(userAd,(err,data) => {
    const user = data;
    console.log("user data", data);  
    const id = user.id; 
  });
  User.deleteUser(id,(err) => {
    //console.log(id);
    if (err)  {
      res.status(400).send({message: 'Une erreur s\'est produite en supprimant'});
    } 
    else {
      res.status(200).send({ message: 'utilisateur supprimé supprimé !'});
    }
  })
}