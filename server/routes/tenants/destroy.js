'use strict';

var Tenant = require('../../models/tenant');

module.exports = {
  handler: function(request, reply) {
    Tenant.remove({_id:request.params.tenantId}, function() {
      reply.redirect('/tenants');
    });
  }
};
