const sql = require('./db');


const User = function(user)  {
  this.name = user.name
  this.address = user.address
  this.password = user.password  
}

User.saveUser = ( user, result) => {
  console.log("ajout d'utilisateur");
  console.log(user.name);
  console.log(user);
  sql.query( `INSERT INTO users values("${user.name}", "${user.address}", null, "${user.password}");`, (err, res) => {
    if (err) {
      console.log("error", err);
      result(null, err);
      return;
    }
    console.log("utilisateur ajouté");
    result(null, res);
  });
}

User.findUser = (userAd, result) => {
  console.log("user", userAd);
  sql.query(`SELECT * FROM users WHERE users.address = "${userAd}" ;`, (err, res) => {
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