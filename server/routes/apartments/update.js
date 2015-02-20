'use strict';

var Apartment = require('../../models/apartment');

module.exports = {
  handler: function(request, reply) {
    Apartment.findByIdAndUpdate(request.params.apartmentId, request.payload, function() {
      reply.redirect('/apartments/' + request.params.apartmentId);
    });
  }
};
