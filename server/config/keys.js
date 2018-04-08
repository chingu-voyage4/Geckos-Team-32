//DO commit - both prod and dev builds will ask this file for keys and then redirect to respective files for keys.
if (process.env.NODE_ENV === 'production') {
  //we are in production - return the prod set of keys
  module.exports = require('./prod');
} else {
  // we are in development = return teh dev set of keys!
  module.exports = require('./dev');
}