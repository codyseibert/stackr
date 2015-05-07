var theDB = require('../DBConnection');
var theMessages = require('../Messages');
var theDaoHelper = require('../DaoHelper');

var UsersDao = function () {
    'use strict';

    this.getUser = function (pUserId, pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id, email, password FROM users WHERE id = ?",
            [pUserId],
            theDaoHelper.SINGLE,
            pCallback
        );
    };

    this.getUsers = function (pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id, email, password FROM users",
            [],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.createUser = function (pUser, pCallback) {
        theDaoHelper.executeQuery(
            "INSERT INTO users (email, password) VALUES (?, ?)",
            [pUser.email, pUser.password],
            theDaoHelper.INSERT,
            pCallback
        );
    };

    this.updateUser = function (pUser, pCallback) {
        theDaoHelper.executeQuery(
            "UPDATE users SET email = ?, password = ? WHERE id = ?",
            [pUser.email, pUser.password, pUser.id],
            theDaoHelper.UPDATE,
            pCallback
        );
    };

    this.deleteUser = function (pUserId, pCallback) {
        theDaoHelper.executeQuery(
            "DELETE FROM users WHERE id = ?",
            [pUserId],
            theDaoHelper.DELETE,
            pCallback
        );
    };
};

module.exports = new UsersDao();
