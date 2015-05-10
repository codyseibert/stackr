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
        var callback,
            stackId;
        stackId = pReq.params.stackId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theCardsDao.getCards(stackId, callback);
    };

    this.createCard = function (pReq, pRes) {
        var callback,
            stackId;
        stackId = pReq.params.stackId;
        pReq.body.stack_id = stackId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theCardsDao.createCard(pReq.body, callback);
    };

    this.markAsCorrect = function (pReq, pRes) {
        var callback;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theCardsDao.markAsCorrect(pReq.user.id, pReq.params.cardId, callback);
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
