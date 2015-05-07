var theCardsDao = require('../daos/CardsDao');
var theControllerHelper = require('../ControllerHelper');

var CardsController = function () {
    'use strict';

    this.getCard = function (pReq, pRes) {
        var callback,
            cardId;
        cardId = pReq.params.cardId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theCardsDao.getCard(cardId, callback);
    };

    this.getCards = function (pReq, pRes) {
        var callback;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theCardsDao.getCards(callback);
    };

    this.createCard = function (pReq, pRes) {
        var callback;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theCardsDao.createCard(pReq.body, callback);
    };

    this.updateCard = function (pReq, pRes) {
        var callback,
            cardId;
        cardId = pReq.params.cardId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theCardsDao.updateCard(pReq.body, callback);
    };

    this.deleteCard = function (pReq, pRes) {
        var callback,
            cardId;
        cardId = pReq.params.cardId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theCardsDao.deleteCard(cardId, callback);
    };
};

module.exports = new CardsController();
