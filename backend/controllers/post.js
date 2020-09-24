const Post = require("../models/Post");
db = require('../models/index');
const post = Post.post;

const dbPost = db.posts;
console.log("db.post");
console.log(db.posts);
console.log(post);
console.log(Post);

exports.createPost = (req, res) => {
   
    const postObject = JSON.parse(req.body.post);
    delete postObject.postId;
    const post = new Post({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    post.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
        .catch(error => res.status(400).json({ error }));

  };

  exports.findAllPost = (req, res,next) => {  
    console.log("salut");
    //res.status(200).send("bonjour à vous");
    post.find()
    .then( posts => res.status(200).json(posts))
    .catch( error => res.status(400).json( {error}));
};

  exports.findOnePost = (req, res) => {
    const id = req.params.postId;
  
    post.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };