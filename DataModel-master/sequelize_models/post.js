// module.exports = function (sequelize, DataTypes) {
//     var Post = sequelize.define("Post", {
//       id: {
//         primaryKey: true,
//         autoIncrement: true,
//         type: Sequelize.INTEGER
//       },
//       firstname: {
//         type: Sequelize.STRING,
//         notEmpty: true,
  
//       },
//       lastname: {
//         type: Sequelize.STRING,
//         notEmpy: true,
//       },
//       email: {
//         type: DataTypes.TEXT,
//         allowNull: false,
//         validate: {
//           len: [6]
//         }
//       },
//       Password: {
//         type: Sequelize.STRING,
//         allowNull: false
//       },
//       last_login: {
//         type: Sequelize.DATE
//       },
//     });
//     Post.associate = function (models) {
//       Post.hasMany(models.Hook, {
//         foreignKey: {
//           allowNull: false
//         }
//       });
//     };
//     Post.associate = function (models) {
//       Post.hasMany(models.Post, {
//         foreignKey: {
//           allowNull: false
//         }
//       });
//     };
//     return Post;
//   };
  