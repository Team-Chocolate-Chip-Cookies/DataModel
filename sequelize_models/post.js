// post.js
// Sequelize data model user posts

module.exports = function (sequelize, DataTypes) {
    var Post = sequelize.define("Post", {
        postID: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        title: {
            type: Sequelize.STRING,
            notEmpty: true,
        }
    })
    return Post
}