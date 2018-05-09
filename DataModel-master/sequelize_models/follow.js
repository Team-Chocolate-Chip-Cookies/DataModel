// module.exports = function (sequelize, DataTypes) {
//     var Follow = sequelize.define("Follow", {
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
//     Follow.associate = function (models) {
//       Follow.hasMany(models.Hook, {
//         foreignKey: {
//           allowNull: false
//         }
//       });
//     };
//     Follow.associate = function (models) {
//       Follow.hasMany(models.Follow, {
//         foreignKey: {
//           allowNull: false
//         }
//       });
//     };
//     return Follow;
//   };