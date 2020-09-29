const Post = require("../models/Post");

//exports.createPost = (req, res) => {  
//  console.log("pinguin 1"); 
//  const postObject = JSON.parse(req.body.post);
//  delete postObject.id;
//  const post = new Post({
//      ...postObject,
//      image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
//  });
//  console.log("pinguin 2"); 
//  post.createAPost()
//      .then(() => res.status(201).json({ message: 'Post enregistré !'}))
//      .catch(error => res.status(400).json({ error }));
//};

exports.findAllPost = (req, res, next) => { 
   console.log("salut salut");
   //res.status(200).send("bonjour à vous pinguin");
  Post.findAll((err, data) => {
  if (err) {
    res.status(500).send({message: 'Une erreur s\'est produite'});
  } 
  else { console.log(data);
    res.status(200).send(data)
  }
  })
};

exports.findOnePost = (req, res) => {
  const id = req.params.id;
  console.log("salut salut");
  //res.status(200).send("bonjour à vous pinguin");
  Post.findByPk(id,(err, data) => {
  if (err) {
    res.status(500).send({message: 'Une erreur s\'est produite'});
  } 
  else { console.log(data);
    res.status(200).send(data)
  }
  })
}