var theDB = require('../DBConnection');
var theMessages = require('../Messages');
var theDaoHelper = require('../DaoHelper');

var UsersCardsDao = function () {
    'use strict';

    this.getUsersCard = function (pUsersCardId, pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id, user_id, card_id, correct, date FROM users_cards WHERE id = ?",
            [pUsersCardId],
            theDaoHelper.SINGLE,
            pCallback
        );
    };

    this.getUsersCards = function (pCallback) {
        theDaoHelper.executeQuery(
            "SELECT id, user_id, card_id, correct, date FROM users_cards",
            [],
            theDaoHelper.MULTIPLE,
            pCallback
        );
    };

    this.createUsersCard = function (pUsersCard, pCallback) {
        theDaoHelper.executeQuery(
            "INSERT INTO users_cards (user_id, card_id, correct, date) VALUES (?, ?, ?, ?)",
            [pUsersCard.user_id, pUsersCard.card_id, pUsersCard.correct, pUsersCard.date],
            theDaoHelper.INSERT,
            pCallback
        );
    };

    this.updateUsersCard = function (pUsersCard, pCallback) {
        theDaoHelper.executeQuery(
            "UPDATE users_cards SET user_id = ?, card_id = ?, correct = ?, date = ? WHERE id = ?",
            [pUsersCard.user_id, pUsersCard.card_id, pUsersCard.correct, pUsersCard.date, pUsersCard.id],
            theDaoHelper.UPDATE,
            pCallback
        );
    };

    this.deleteUsersCard = function (pUsersCardId, pCallback) {
        theDaoHelper.executeQuery(
            "DELETE FROM users_cards WHERE id = ?",
            [pUsersCardId],
            theDaoHelper.DELETE,
            pCallback
        );
    };
};

module.exports = new UsersCardsDao();
