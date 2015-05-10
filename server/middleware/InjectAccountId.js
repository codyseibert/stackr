var theUsersDao = require('../daos/UsersDao');
var theMessages = require('../Messages');

var InjectAccountId = function (pReq, pRes, next) {
    'use strict';

    function b64_to_utf8( str ) {
      return new Buffer(str, 'base64').toString('binary')
    };

    if (!pReq.headers.authorization) {
        pRes.status(400);
        pRes.send(theMessages.error('Basic Auth Token Missing!'));
        return;
    }

    var headers,
        split,
        token,
        basic,
        creds,
        email,
        password;

    headers = pReq.headers.authorization;
    split = headers.split(' ');
    basic = b64_to_utf8(split[1]);

    creds = basic.split(':');
    email = creds[0];
    password = creds[1];
    theUsersDao.validateCreditials(email, password, function (ret) {
        if (ret.error) {
            pRes.status(400);
            pRes.send(theMessages.error('Invalid Bearer Token!'));
            return;
        }

        pReq.user = {
            id: ret.id
        };

        return next();
    });
};

module.exports = InjectAccountId;
