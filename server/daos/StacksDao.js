var theDB = require('../DBConnection');
var theMessages = require('../Messages');
var theDaoHelper = require('../DaoHelper');

var StacksDao = function () {
    'use strict';

    this.getStack = function (pStackId, pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id, user_id, title, description, date FROM stacks WHERE id = ?",
            [pStackId],
            theDaoHelper.SINGLE,
            pCallback
        );
    };

    this.getStacks = function (pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id, user_id, title, description, date FROM stacks",
            [],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.createStack = function (pStack, pCallback) {
        theDaoHelper.executeQuery(
            "INSERT INTO stacks (user_id, title, description, date) VALUES (?, ?, ?, NOW())",
            [pStack.user_id, pStack.title, pStack.description],
            theDaoHelper.INSERT,
            pCallback
        );
    };

    this.updateStack = function (pStack, pCallback) {
        theDaoHelper.executeQuery(
            "UPDATE stacks SET user_id = ?, title = ?, description = ?, date = NOW() WHERE id = ?",
            [pStack.user_id, pStack.title, pStack.description, pStack.id],
            theDaoHelper.UPDATE,
            pCallback
        );
    };

    this.deleteStack = function (pStackId, pCallback) {
        theDaoHelper.executeQuery(
            "DELETE FROM stacks WHERE id = ?",
            [pStackId],
            theDaoHelper.DELETE,
            pCallback
        );
    };
};

module.exports = new StacksDao();
