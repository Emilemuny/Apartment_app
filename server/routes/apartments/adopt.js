'use strict';

var Apartment = require('../../models/apartment');
var Tenant = require('../../models/tenant');

module.exports = {
  handler: function(request, reply) {
    Apartment.findById(request.params.apartmentId, function(err, apartment){
      Tenant.findById(request.payload.tenantId, function(err, tenant){
        tenant.pets.push(apartment._id);
        apartment.isAdopted = true;
        tenant.save(function(){
          apartment.save(function(){
            reply.redirect('/tenants/' + tenant._id);
          });
        });
      });
    });
  }
};
