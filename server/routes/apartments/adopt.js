'use strict';

var Apartment = require('../../models/apartment');
var Tenant = require('../../models/tenant');

module.exports = {
  handler: function(request, reply) {
    Apartment.findById(request.params.apartmentId, function(err, apartment){
      Tenant.findById(request.payload.tenantId, function(err, tenant){
        console.log(request.payload);
        apartment.rooms.push({ tenant: tenant.name, roomno: request.payload.roomNos });
      //  apartment.rooms.push({ roomNo: roomNos});
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
