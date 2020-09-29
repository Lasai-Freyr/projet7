const Commentaires = require("../models/Commentaires");
const Post = require("../models/Commentaires");
 

exports.findAllCommentaires = (req, res, next) => { 
   console.log("salut salut");
   //res.status(200).send("bonjour à vous pinguin");
  Commentaires.findAll((err, data) => {
  if (err) {
    res.status(500).send({message: 'Une erreur s\'est produite'});
  } 
  else { console.log(data);
    res.status(200).send(data)
  }
  })
};