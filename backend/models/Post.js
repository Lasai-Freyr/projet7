const sql = require('./db');

const Post = function(post) {
 // this.id = post.id
  this.userId = post.userId
  this.title = post.title
  this.content = post.content
  this.image = post.image
  this.datePost = post.datePost
}

Post.createAPost = (postObject,result) => {
  console.log("ajout de post");
  console.log(postObject);
  sql.query(`INSERT INTO posts values( NOW(), "${postObject.title}", 1, "${postObject.content}", "${postObject.image}", null)`, (err, res) => {
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

Post.deleteOnePost = (id, result) => {
  sql.query(`DELETE FROM posts WHERE id=${id}`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    console.log("post supprimé");
    result(null, res);
  });
}

module.exports = Post;
