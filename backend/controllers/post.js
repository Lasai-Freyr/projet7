const Post = require("../models/Post");
const jwt = require('jsonwebtoken');


exports.createPost = (req, res) => {  
  const token = req.headers.authorization.split(' ')[1];
  const decodedToken = jwt.verify(token, '753215846392576321586015406875');
  const userId = decodedToken.userId;
  console.log("pinguin 1"); 
  console.log(req.body.image);
  const postObject = req.body;
  delete postObject.id;
  if (!req.body.image) {
    const post = new Post({
      ...postObject })
  } else {
    //console.log("req.file", req.file);
      const post = new Post({
      ...postObject, 
        
      image: `${req.protocol}://${req.get('host')}/images/${req.body.image}`
    })
};
  console.log("pinguin 2"); 
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
   console.log("salut salut");
   //res.status(200).send("bonjour à vous pinguin");
  Post.findAll((err, data) => {
  if (err) {
    res.status(500).send({message: 'Une erreur s\'est produite'});
  } 
  else { //console.log(data);
    res.status(200).send(data)
  }
  })
};

exports.findOnePost = (req, res, next) => {
 console.log(req.params.id);
  id = req.params.id;
  console.log("salution");
  //res.status(200).send("bonjour à vous pinguin");
  Post.findByPk(id,(err, data) => {
  if (err) {
    res.status(500).send({message: 'Une erreur s\'est produite'});
  } 
  else { console.log(data);
   console.log("data");
    res.status(200).send(data)
  }
  })
}

exports.deletePost = (req, res, next) => {
  const id = req.params.id;
  //Post.findByPk(id)
      //const filename = post.image.split('/images/')[1];
      //fs.unlink(`images/${filename}`, () => {
  //console.log(req.body.id);
  Post.deleteOnePost(id,(err) => {
    //console.log(id);
    if (err)  {
      res.status(400).send({message: 'Une erreur s\'est produite en supprimant'});
    } 
    else {
      res.status(200).send({ message: 'Objet supprimé !'});
    }
  })
}
    