'use strict';

var active = require('../../views/helpers/active');
var Apartment = require('../../models/apartment');

module.exports = {
  handler: function(request, reply) {
    Apartment.findOne({_id:request.params.apartmentId}, function(err, apartment) {
      var species = ['Dog', 'Cat', 'Shark', 'Bird', 'Walrus'];
      reply.view('templates/apartments/edit', {path:'/apartments', active:active, apartment:apartment, species:species});
    });
  }
};
