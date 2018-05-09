// hook.js
// Sequelize data model for Hooks

module.exports = function (sequelize, DataTypes) {
    var Hook = sequelize.define("Hook", {
        id: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        name: {
            type: Sequelize.STRING,
            notEmpty: true,

        },
        comment: {
            type: Sequelize.STRING,
            notEmpy: true,
        },
        senderID: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        recieverID: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        dateCreated: {
            type: Sequelize.DATE
        },
    });
    movie.associate = function (models) {
        movie.belongsTo(models.Hook, {
            foreignKey: {
                allowNull: true
            }
        });
    };
    VideoGame.associate = function (models) {
        VideoGame.belongsTo(models.Hook, {
            foreignKey: {
                allowNull: true
            }
        });
    };
    return Hook;
};