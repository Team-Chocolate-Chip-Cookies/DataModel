// user.js
// Sequelize data model for Users

module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    id: {
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
      allowNull: false,
      validate: {
        len: [6]
      }
    },
    Password: {
      type: Sequelize.STRING,
      allowNull: false
    },
    last_login: {
      type: Sequelize.DATE
    },
  });
  hook.associate = function (models) {
    hook.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  post.associate = function (models) {
    post.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return User;
};
