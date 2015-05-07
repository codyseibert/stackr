var theUsersCardsDao = require('../daos/UsersCardsDao');
var theControllerHelper = require('../ControllerHelper');

var UsersCardsController = function () {
    'use strict';

    this.getUsersCard = function (pReq, pRes) {
        var callback,
            users_cardId;
        users_cardId = pReq.params.users_cardId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersCardsDao.getUsersCard(users_cardId, callback);
    };

    this.getUsersCards = function (pReq, pRes) {
        var callback;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersCardsDao.getUsersCards(callback);
    };

    this.createUsersCard = function (pReq, pRes) {
        var callback;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersCardsDao.createUsersCard(pReq.body, callback);
    };

    this.updateUsersCard = function (pReq, pRes) {
        var callback,
            users_cardId;
        users_cardId = pReq.params.users_cardId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersCardsDao.updateUsersCard(pReq.body, callback);
    };

    this.deleteUsersCard = function (pReq, pRes) {
        var callback,
            users_cardId;
        users_cardId = pReq.params.users_cardId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersCardsDao.deleteUsersCard(users_cardId, callback);
    };
};

module.exports = new UsersCardsController();
