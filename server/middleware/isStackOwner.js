var theStacksDao = require('../daos/StacksDao');
var theMessages = require('../Messages');

var isStackOwner = function (pReq, pRes, next) {
    'use strict';
    
    theStacksDao.getStack(pReq.params.stackId, function (ret) {
      if (ret.user_id === pReq.user.id) {
          return next();
      } else {
        pRes.status(400);
        pRes.send(theMessages.error('Invalid Acccess'));
        return;
      }
    });

};

module.exports = isStackOwner;
