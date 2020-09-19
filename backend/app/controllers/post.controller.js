const db = require("../models/post.model");
const post = db.posts;
//const Op = db.Sequelize.Op;

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

  exports.findAllPost = (req, res) => {  
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    post.findAll()
      .then(data => {
        res.send(data);
      })
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