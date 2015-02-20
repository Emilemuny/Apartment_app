'use strict';

var Tenant = require('../../models/tenant');

module.exports = {
  handler: function(request, reply) {
    Tenant.findByIdAndUpdate(request.params.tenantId, request.payload, function() {
      reply.redirect('/tenants/' + request.params.tenantId);
    });
  }
};
