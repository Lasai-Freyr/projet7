const sql = require('./db');

const Commentaires = function(commentaires) {
 // this.id = commentaires.id
  this.userId = commentaires.userId
  this.postId = commentaires.postId
  this.content = commentaires.content
  this.dateCommentaire = commentaires.dateCommentaire
}

Commentaires.findAll = (id, result) => {
    sql.execute(`SELECT commentaires.id, postId, userId, content, DATE_FORMAT(dateCommentaire, ' %e/%c/%Y à %T') AS dateCommentaire, name
     FROM commentaires INNER JOIN users on commentaires.userId = users.id WHERE postId = ? ORDER BY dateCommentaire DESC`,
     [`${id}`], (err, res) => {
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
      result(null, res);
    });
  }

Commentaires.createACom = (id, userId, comObject, result) => {
  sql.query(`INSERT INTO commentaires values( null, ${id}, "${comObject.userId}", "${comObject.content}", NOW());`, (err, res) => {
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
  sql.execute(`DELETE FROM commentaires WHERE id = ? `,
  [`${commentId}`], (err, res) => {
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