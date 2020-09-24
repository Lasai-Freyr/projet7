module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        userId: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      
    });
  
    return user;
  };