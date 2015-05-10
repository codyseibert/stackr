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

    this.getStacks = function (pUserId, pCallback) {
        theDaoHelper.executeQuery(
            "SELECT s.id, s.user_id, s.title, s.description, s.date, " +
            "(SELECT SUM(LEAST(uc.correct, 5)) FROM users_cards uc LEFT JOIN cards c ON uc.card_id = c.id INNER JOIN stacks s2 ON s2.id = c.stack_id WHERE s2.id = s.id) / ((SELECT COUNT(c.id) FROM cards c WHERE c.stack_id = s.id) * 5.0) AS progress " +
            "FROM stacks s WHERE s.user_id = ?",
            [pUserId],
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
