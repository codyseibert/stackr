var theUsersDao = require('../daos/UsersDao');
var theControllerHelper = require('../ControllerHelper');

var UsersController = function () {
    'use strict';

    this.getUser = function (pReq, pRes) {
        var callback,
            userId;
        userId = pReq.params.userId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.getUser(userId, callback);
    };

    this.getUsers = function (pReq, pRes) {
        var callback;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.getUsers(callback);
    };

    this.createUser = function (pReq, pRes) {
        var callback;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.createUser(pReq.body, callback);
    };

    this.updateUser = function (pReq, pRes) {
        var callback,
            userId;
        userId = pReq.params.userId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.updateUser(pReq.body, callback);
    };

    this.deleteUser = function (pReq, pRes) {
        var callback,
            userId;
        userId = pReq.params.userId;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.deleteUser(userId, callback);
    };
};

module.exports = new UsersController();
