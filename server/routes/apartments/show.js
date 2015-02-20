'use strict';

var active = require('../../views/helpers/active');
var Apartment = require('../../models/apartment');
var Tenant = require('../../models/tenant');

module.exports = {
  handler: function(request, reply) {
    Apartment.findOne({_id:request.params.apartmentId}, function(err, apartment) {
      Tenant.find(function(err, tenants){
        reply.view('templates/apartments/show', {path:'/apartments', active:active, apartment:apartment, tenants:tenants});
      });
    });
  }
};
