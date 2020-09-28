const Post = require("../models/Post");

exports.createPost = (req, res) => {   
  const postObject = JSON.parse(req.body.post);
  delete postObject.id;
  const post = new Post({
      ...postObject,
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
  });
  post.createAPost()
      .then(() => res.status(201).json({ message: 'Post enregistré !'}))
      .catch(error => res.status(400).json({ error }));
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

//exports.findAllPost = (req, res,next) => {  
//  console.log("salut");
//  res.status(200).send("bonjour à vous");
//  Post.findAll()
//  .then( 
//    (posts) => {
//      const mappedPosts = posts.map((post) => {
//        post.image = req.protocol + '://' + req.get('host') + '/images/' + post.image;
//        return post;
//      });
//      res.status(200).json(mappedPosts);
//    }
//  )
//    .catch( error => res.status(400).json( {error}));
//};

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