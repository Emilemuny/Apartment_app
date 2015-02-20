'use strict';

var active = require('../../views/helpers/active');
var Tenant = require('../../models/tenant');

module.exports = {
  handler: function(request, reply) {
    Tenant.find(function(err, tenants) {
      reply.view('templates/tenants/index', {path:'/tenants', active:active, tenants:tenants});
    });
  }
};
