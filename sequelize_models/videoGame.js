// videoGame.js
// Sequelize data model for Video Games

module.exports = function (sequelize, DataTypes) {
    var VideoGame = sequelize.define("VideoGame", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            notEmpty: true,
        },
        dateCreated: {
            type: Sequelize.DATE
        },
    });
    VideoGame.associate = function (models) {
        VideoGame.belongsTo(models.Hook, {
            foreignKey: {
                allowNull: true
            }
        });
    };
    return VideoGame;
};