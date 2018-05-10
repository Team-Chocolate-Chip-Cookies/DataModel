// movie.js
// Sequelize data model for Movies


module.exports = function (sequelize, DataTypes) {
    var Movie = sequelize.define("Movie", {
        movieID: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            notEmpty: true,
        }
    })
    return Movie
}