const sql = require('./db');

const Post = function(post) {
 // this.id = post.id
  this.userId = post.userId
  this.title = post.title
  this.content = post.content
  this.image = post.image
  this.datePost = post.datePost
  this.likes = post.likes
  this.dislikes = post.dislikes
  this.usersLiked = post.usersLiked
  this.usersDisliked = post.usersDisliked
}

Post.createAPost = (postObject,userId, result) => {
  sql.query(`INSERT INTO posts values( NOW(), "${postObject.title}", "${userId}", "${postObject.content}", "${postObject.image}", null, 0, 0, "", "")`, (err, res) => {
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
  sql.query('SELECT datePost, title, posts.id, userId, content, image, name  FROM posts INNER JOIN users on posts.userId = users.id ORDER BY datePost DESC', (err, res) => {
    if (err) {
      console.log('error: ', err );
      result(null, err);
      return;
    }
  //  console.log("posts : ", res);
    result(null, res);
});
}

Post.findByPk = (id, result) => {
  sql.query(`SELECT DATE_FORMAT(datePost, ' %e/%c/%Y à %T') AS datePost, title, likes, dislikes, usersLiked, usersDisliked,
   posts.id, userId, content, image, name, address  FROM posts INNER JOIN users on posts.userId = users.id WHERE posts.id = "${id}";`, (err, res) => {
    if (err) {
      console.log('error: ', err );
      result(null, err);
      return;
    }
    result(null, res);
  })
}

Post.deleteOnePost = (id, result) => {
  sql.query(`DELETE FROM posts WHERE posts.id =${id};`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    console.log("post supprimé");
    result(null, res);
  });
}

Post.modifLike = (id, updateLike) => {
  sql.query(`UPDATE posts set likes = ${updateLike.likes}, dislikes = ${updateLike.dislikes},
   usersLiked = "${updateLike.usersLiked}", usersDisliked = "${updateLike.usersDisliked}" WHERE id = "${id}";`)
}

module.exports = Post;
