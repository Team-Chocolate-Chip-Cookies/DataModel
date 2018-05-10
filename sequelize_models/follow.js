// follow.js
// Sequelize data model for tracking user "following" relationships
// This table should have the ID of the "follower" and "followed" user.  Both of those fields should be forign keys.
// There will likely be two rows of relationships for each two way relationship user 1 following user 2 and user 2 following user 1.  Each user ID will need to be a forgin key.
// I belive the forgin key pairs will need to be paired up in the DB to make sure there is no duplication among them.
module.exports = function (sequelize, DataTypes) {
    var Follow = sequelize.define("Follow", {
        relationshipID: {
            primaryKey: true,
            autoIncrement: true,
            type: Sequelize.INTEGER
        },
        follower: {
            type: Sequelize.INTEGER,
            allowNull: False,
            refernces: {
                model: 'Users',
                key: 'id'
            }
        },
        followed: {
            type: Sequelize.INTEGER,
            allowNull: False,
            refernces: {
                model: 'Users',
                key: 'id'
            }
        },
    });
    Follow.belongsTo(User, {as: "Following", foreignKey: 'User'});
    return Follow;
}