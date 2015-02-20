'use strict';

var Apartment = require('../../models/apartment');
var Tenant = require('../../models/tenant');

module.exports = {
  handler: function(request, reply) {
    Apartment.findById(request.params.apartmentId, function(err, apartment){
      Tenant.findById(request.payload.tenantId, function(err, tenant){
        apartment.rooms.push({ tenant: tenant.name });
        //apartment.rooms.push({ roomNo: request.param.roomNos});
        apartment.vacant = false;
        tenant.save(function(){
          apartment.save(function(){
            reply.redirect('/tenants/' + tenant._id);
          });
        });
      });
    });
  }
};
