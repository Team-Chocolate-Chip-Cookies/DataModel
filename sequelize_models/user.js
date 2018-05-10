// user.js
// Sequelize data model for Users

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userID: {
      primaryKey: true,
      autoIncrement: true,
      type: Sequelize.INTEGER
    },
    firstname: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    lastname: {
      type: Sequelize.STRING,
      notEmpy: true,
    },
    email: {
      type: DataTypes.TEXT,
      notEmpy: true,
    },
    Password: {
      type: Sequelize.STRING,
      notEmpy: true,
    },
    last_login: {
      type: Sequelize.DATE
    },
  });
  User.associate = function (models) {
    User.hasMany(models.Hook, {
      foreignKey: {
        allowNull: false,
      }
    });
  };
  User.associate = function (models) {
    User.hasMany(models.Post, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  User.associate = function (models) {
    User.hasMany(models.Follow, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return User;
};
