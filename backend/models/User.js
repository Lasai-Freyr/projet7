module.exports = (sequelize, Sequelize) => {
    const user = sequelize.define("user", {
        id: {
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