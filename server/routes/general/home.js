'use strict';

var active = require('../../views/helpers/active');

module.exports = {
  auth: false,
  handler: function(request, reply) {


    reply.view('templates/general/home', request.auth.credentials);
  }
};
