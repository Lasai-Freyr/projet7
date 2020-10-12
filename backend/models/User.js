const sql = require('./db');


const User = function(user)  {
  this.name = user.name
  this.address = user.address
  this.password = user.password
  this.role = user.role  
}

User.saveUser = ( user, result) => {
  sql.query( `INSERT INTO users values("${user.name}", "${user.address}", null, "${user.password}", "role.User") ;`, (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
      return;
    }
    console.log("utilisateur ajouté");
    result(null, res);
  });
}

User.findAnUser = (userId, result) => {
  sql.execute(`SELECT * FROM users WHERE users.id = ? OR users.address= ? ;`,
  [`${userId}`,`${userId}`], (err, res) => {
    if (err) {
      console.log('error: ', err );
      result(null, err);
      return
    }
    console.log("res", res);
    result(null, res);
  })
}

User.deleteUser = (userId, result) => {

  sql.execute(`DELETE FROM users WHERE users.id =  ? ;`,
  [`${userId}`], (err, res) => {
    if (err ) {
      console.log('error: ', err );
      result(null, err);
      return;
    }
    console.log("res", res);
    result(null, res);
  })
}

  module.exports = User;