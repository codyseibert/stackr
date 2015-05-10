var theDB = require('../DBConnection');
var theMessages = require('../Messages');
var theDaoHelper = require('../DaoHelper');

var CardsDao = function () {
    'use strict';

    this.getCard = function (pCardId, pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id, stack_id, front, back FROM cards WHERE id = ?",
            [pCardId],
            theDaoHelper.SINGLE,
            pCallback
        );
    };

    this.getCards = function (pStackId, pCallback) {
        theDaoHelper.executeQuery(
            "SELECT c.id, c.stack_id, c.front, c.back, COALESCE(uc.correct, 0) AS correct, uc.date FROM cards c " +
            "LEFT JOIN users_cards uc ON uc.card_id = c.id WHERE c.stack_id = ?",
            [pStackId],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.createCard = function (pCard, pCallback) {
        theDaoHelper.executeQuery(
            "INSERT INTO cards (stack_id, front, back) VALUES (?, ?, ?)",
            [pCard.stack_id, pCard.front, pCard.back],
            theDaoHelper.INSERT,
            pCallback
        );
    };

    this.updateCard = function (pCard, pCallback) {
        theDaoHelper.executeQuery(
            "UPDATE cards SET stack_id = ?, front = ?, back = ? WHERE id = ?",
            [pCard.stack_id, pCard.front, pCard.back, pCard.id],
            theDaoHelper.UPDATE,
            pCallback
        );
    };

    this.deleteCard = function (pCardId, pCallback) {
        theDaoHelper.executeQuery(
            "DELETE FROM cards WHERE id = ?",
            [pCardId],
            theDaoHelper.DELETE,
            pCallback
        );
    };

    this.markAsCorrect = function (pUserId, pCardId, pCallback) {
        theDaoHelper.executeQuery(
            "INSERT INTO users_cards (user_id, card_id, correct, date) VALUES(?, ?, 1, NOW()) " +
            "ON DUPLICATE KEY " +
            "UPDATE correct = correct + 1, date = NOW()",
            [pUserId, pCardId],
            theDaoHelper.DELETE,
            pCallback
        );
    };
};

module.exports = new CardsDao();
