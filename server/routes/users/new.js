'use strict';

module.exports = {
  auth: {
    mode: false,
  },
  handler: function(request, reply) {
    reply.view('templates/users/new');
  }
};
