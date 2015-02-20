'use strict';

var active = require('../../views/helpers/active');
var Tenant = require('../../models/tenant');

module.exports = {
  handler: function(request, reply) {
    Tenant.findOne({_id:request.params.tenantId}, function(err, tenant) {
      reply.view('templates/tenants/edit', {path:'/tenants', active:active, tenant:tenant});
    });
  }
};
