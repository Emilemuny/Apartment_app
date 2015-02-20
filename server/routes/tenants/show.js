'use strict';

var active = require('../../views/helpers/active');
var Tenant = require('../../models/tenant');

module.exports = {
  handler: function(request, reply) {
    Tenant.findOne({_id:request.params.tenantId}).populate('pets').exec(function(err, tenant) {
      reply.view('templates/tenants/show', {path:'/tenants', active:active, tenant:tenant});
    });
  }
};
