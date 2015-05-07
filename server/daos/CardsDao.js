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

    this.getCards = function (pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id, stack_id, front, back FROM cards",
            [],
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
};

module.exports = new CardsDao();
