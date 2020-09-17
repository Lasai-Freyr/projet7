module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "T@rdis64500",
    DB: "groupomania",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };