'use strict';

var Tenant = require('../../models/tenant');

module.exports = {
  handler: function(request, reply) {
    var tenant = new Tenant(request.payload);
    tenant.save(function() {
      reply.redirect('/Tenants');
    });
  }
};
