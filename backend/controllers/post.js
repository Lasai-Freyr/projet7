const Post = require("../models/Post");
const jwt = require('jsonwebtoken');


exports.createPost = (req, res) => {  
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, '753215846392576321586015406875');
  const userId = decodedToken.userId;
  const postObject = req.body;
  delete postObject.id;
  if (!req.body.image) {
    const post = new Post({
      ...postObject })
  } else {
      const post = new Post({
      ...postObject, 
        
      image: `${req.protocol}://${req.get('host')}/images/${req.body.image}`
    })
};
  Post.createAPost(postObject,userId, (err) => {
    if (err) {
      res.status(500).send({message: 'Une erreur s\'est produite'});
    }
    else {
      res.status(201).send({ message: 'Post enregistré !'})
    }
  })
};

exports.findAllPost = (req, res, next) => { 
  Post.findAll((err, data) => {
  if (err) {
    res.status(500).send({message: 'Une erreur s\'est produite'});
  } 
  else { 
    res.status(200).send(data)
  }
  })
};

exports.findOnePost = (req, res, next) => {
  id = req.params.id;
  Post.findByPk(id,(err, data) => {
  if (err) {
    res.status(500).send({message: 'Une erreur s\'est produite'});
  } 
  else { 
    res.status(200).send(data)
  }
  })
}

exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  Post.deleteOnePost(id,(err) => {
    if (err)  {
      res.status(400).send({message: 'Une erreur s\'est produite en supprimant'});
    } 
    else {
      res.status(200).send({ message: 'Objet supprimé !'});
    }
  })
}
    