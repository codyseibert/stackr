var theUsersDao = require('../daos/UsersDao');
var theControllerHelper = require('../ControllerHelper');

var LoginController = function () {
    'use strict';

    this.login = function (pReq, pRes) {
        var callback,
            email,
            password;
        email = pReq.body.email;
        password = pReq.body.password;
        callback = theControllerHelper.createDefaultCallback(pRes);
        theUsersDao.validateCreditials(email, password, callback);
    };

};

module.exports = new LoginController();
