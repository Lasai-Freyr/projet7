const Post = require("../models/Post");

exports.createPost = (req, res) => {
   
    const postObject = JSON.parse(req.body.post);
    delete postObject.id;
    const post = new Post({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });
    post.save()
        .then(() => res.status(201).json({ message: 'Post enregistré !'}))
        .catch(error => res.status(400).json({ error }));

  };

exports.findAllPost = (req, res,next) => {  
  console.log("salut");
  res.status(200).send("bonjour à vous");
  Post.findAll()
  .then( 
    (posts) => {
      const mappedPosts = posts.map((post) => {
        post.image = req.protocol + '://' + req.get('host') + '/images/' + post.image;
        return post;
      });
      res.status(200).json(mappedPosts);
    }
  )
    .catch( error => res.status(400).json( {error}));
};

  exports.findOnePost = (req, res) => {
    const id = req.params.id;
  
    Post.findByPk(id)
      .then(
        (post) => {
          if (!post) {
            return res.status(404).send(new Error('Post not found!'));
          }
          post.image = req.protocol + '://' + req.get('host') + '/images/' + post.image;
          res.status(200).json(post);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };