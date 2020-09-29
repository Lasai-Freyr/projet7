const Post = require("../models/Post");

exports.createPost = (req, res) => {  
  console.log("pinguin 1"); 
  console.log(req.body.title);
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
  console.log("pinguin 2"); 
  Post.createAPost(postObject,(err) => {
    if (err) {
      res.status(500).send({message: 'Une erreur s\'est produite'});
    }
    else {
      res.status(200).send({ message: 'Post enregistré !'})
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

exports.deletePost = (req, res, next) => {
  Post.findByPk({ id: req.body.id })
    .then(post => {
      const filename = post.image.split('/images/')[1];
      fs.unlink(`images/${filename}`, () => {
        Post.deleteOne({ _id: req.body.id })
          .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
          .catch(error => res.status(400).json({ error }));
      });
    })
    .catch(error => res.status(500).json({ error }));
};