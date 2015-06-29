"use strict";

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: {
            type : DataTypes.STRING
        }
    }, {
        classMethods: {
            associate: function(models) {
                User.hasMany(models.Task)
            },
            add: function (username) {
                return User.create({username: username});
            }
        }
    });

    return User;
};