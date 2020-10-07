const sql = require('./db');

const Commentaires = function(commentaires) {
 // this.id = commentaires.id
  this.userId = commentaires.userId
  this.postId = commentaires.postId
  this.content = commentaires.content
  this.dateCommentaire = commentaires.dateCommentaire
}

Commentaires.findAll = (id, result) => {
    sql.query(`SELECT commentaires.id, postId, userId, content, dateCommentaire, name FROM commentaires INNER JOIN users on commentaires.userId = users.id WHERE postId = ${id} ORDER BY dateCommentaire DESC`, (err, res) => {
      if (err) {
        console.log('error: ', err );
        result(null, err);
        return;
      } else {
        if (!result) {
        console.log('aucun commentaires');
        result(null, err);
        return;
        }
      }
  
      console.log("commentaires : ", res);
      result(null, res);
    });
  }

Commentaires.createACom = (id, comObject, result) => {
  console.log("ajout de com");
  console.log(comObject);
  sql.query(`INSERT INTO commentaires values( null, ${id}, "2", "${comObject._value}", NOW());`, (err, res) => {
    if (err) {
      console.log('error: ', err );
        result(null, err);
      return;
    }
    console.log("com ajouté");
    result(null, res);
  });
}

Commentaires.deleteOneCommentaire = (commentId, result) => {
  sql.query(`DELETE FROM commentaires WHERE id=${commentId}`, (err, res) => {
    if (err) {
      console.log('error: ', err);
      result(null, err);
      return;
    }
    console.log("commentaire supprimé");
    result(null, res);
  });
}

module.exports = Commentaires;