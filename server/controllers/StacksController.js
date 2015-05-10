var theStacksDao = require('../daos/StacksDao');
var theControllerHelper = require('../ControllerHelper');

var StacksController = function () {
    'use strict';

    this.getStack = function (pReq, pRes) {
        var callback,
            stackId;
        stackId = pReq.params.stackId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theStacksDao.getStack(stackId, callback);
    };

    this.getStacks = function (pReq, pRes) {
        var callback;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theStacksDao.getStacks(pReq.user.id, callback);
    };

    this.createStack = function (pReq, pRes) {
        var callback;
        callback = theControllerHelper.createDefaultCallback(pRes);
        pReq.body.user_id = pReq.user.id;
        theStacksDao.createStack(pReq.body, callback);
    };

    this.updateStack = function (pReq, pRes) {
        var callback,
            stackId;
        stackId = pReq.params.stackId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theStacksDao.updateStack(pReq.body, callback);
    };

    this.deleteStack = function (pReq, pRes) {
        var callback,
            stackId;
        stackId = pReq.params.stackId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theStacksDao.deleteStack(stackId, callback);
    };
};

module.exports = new StacksController();
