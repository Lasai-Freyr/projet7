const Commentaires = require("../models/Commentaires");
 

exports.findAllCommentaires = (req, res, next) => { 
  
   console.log("salut naruto");
   //res.status(200).send("bonjour à vous pinguin");
  Commentaires.findAll(id,(err, data) => {
  if (err) {
    res.status(500).send({message: 'Une erreur s\'est produite'});
  } 
  else { //console.log(data);
    res.status(200).send(data)
  }
  })
};

exports.createCommentaire = ( req, res, next) => {
  const comObject = req.body;
  console.log("le req body id ");
  console.log(req.body);
  delete comObject.id;
  const comentaire = new Commentaires({
  ...comObject
  });
  console.log("pinguin 2"); 
  Commentaires.createACom(id, comObject,(err) => {
    if (err) {
      res.status(500).send({message: 'Une erreur s\'est produite'});
    }
    else {
      res.status(201).send({ message: 'Commentaire enregistré !'})
    }
  })
}

exports.deleteCommentaire = (req, res, next) => {
  const commentId = req.params.id;
  Commentaires.deleteOneCommentaire(commentId,(err) => {
    //console.log(id);
    if (err)  {
      res.status(400).send({message: 'Une erreur s\'est produite en supprimant'});
    } 
    else {
      res.status(200).send({ message: 'Objet supprimé !'});
    }
  })
}