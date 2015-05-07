var path = require('path');

module.exports = {
  env: process.env.NODE_ENV,
  root: path.normalize(__dirname + '/../..'),
  port: process.env.PORT || 9000
};
