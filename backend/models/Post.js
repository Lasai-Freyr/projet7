const sql = require('./db');

const Post = function(post) {
  this.id = post.id
  this.userId = post.userId
  this.title = post.title
  this.content = post.content
  this.image = post.image
  this.datePost = post.datePost
}

Post.findAll = (result) => {
  sql.query('SELECT * FROM posts', (err, res) => {
    if (err) {
      console.log('error: ', err );
      result(null, err);
      return;
    }

    console.log("posts : ", res);
    result(null, res);
});
}

Post.findByPk = (result) => {
  sql.query(`SELECT * FROM posts where id=${id}`, (err, res) =>{
    if (err) {
      console.log('error: ', err );
      result(null, err);
      return;
    }

    console.log("post : ", res);
   // result(null, res);
  })
}

module.exports = Post;
