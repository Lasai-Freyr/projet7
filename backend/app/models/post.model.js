module.exports = (sequelize, Sequelize) => {
    const post = sequelize.define("post", {
      postId: {
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.STRING
      },
      title: {
        type: Sequelize.STRING
      },
      datePost: {
        type: Sequelize.DATE
      },
      
    });
  
    return post;
  };