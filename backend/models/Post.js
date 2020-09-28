const sql = require('./db');

const Post = function(post) {
 // this.id = post.id
  this.userId = post.userId
  this.title = post.title
  this.content = post.content
  this.image = post.image
  this.datePost = post.datePost
}

Post.creatAPost = (title, content, image) => {
  console.log("ajout de post");
  sql.query(`INSERT INTO posts values( NOW(), ${title}, 1, ${content}, ${image}, null)`, (err, res) => {
    if (err) {
      console.log('error: ', err );
      result(null, err);
      return;
    }
    console.log("posts ajouté");
    result(null, res);
  });
}

Post.findAll = (result) => {
  sql.query('SELECT * FROM posts ORDER BY datePost DESC', (err, res) => {
    if (err) {
      console.log('error: ', err );
      result(null, err);
      return;
    }

    console.log("posts : ", res);
    result(null, res);
});
}

Post.findByPk = (id, result) => {
  sql.query(`SELECT * FROM posts where id=${id}`, (err, res) =>{
    if (err) {
      console.log('error: ', err );
      result(null, err);
      return;
    }
    console.log("post : ", res);
    result(null, res);
  })
}

module.exports = Post;
