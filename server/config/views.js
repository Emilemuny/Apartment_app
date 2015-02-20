'use strict';

module.exports = {
  engines: {jade: require('jade')},
  path: __dirname + '/../views',
  helpersPath: __dirname + '/../views/helpers',
  compileOptions: {pretty: true, doctype: 'html'}
};
