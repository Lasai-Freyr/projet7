const sql = require('./db');

const Commentaires = function(commentaires) {
 // this.id = post.id
  this.userId = commentaires.userId
  this.postId = commentaires.postId
  this.content = commentaires.content
  this.dateCommentaire = commentaires.dateCommentaire
}

Commentaires.findAll = (result) => {
    sql.query('SELECT * FROM commentaires ORDER BY datePost DESC', (err, res) => {
      if (err) {
        console.log('error: ', err );
        result(null, err);
        return;
      }
  
      console.log("commentaires : ", res);
      result(null, res);
  });
  }

module.exports = Commentaires;