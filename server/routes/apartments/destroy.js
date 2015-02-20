'use strict';

var Apartment = require('../../models/apartment');

module.exports = {
  handler: function(request, reply) {
    Apartment.remove({_id:request.params.apartmentId}, function() {
      reply.redirect('/apartments');
    });
  }
};
