module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("Post", {
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
  
    return Post;
  };