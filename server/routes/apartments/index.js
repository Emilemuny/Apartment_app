'use strict';

var active = require('../../views/helpers/active');
var Apartment = require('../../models/apartment');
var _ = require('lodash');

module.exports = {
  handler: function(request, reply) {
    var q = request.query;

    q = _.pick(q, function(v){
      return v;
    });

    if(q.min){
      q.age = {$gte : q.min};
      delete q.min;
    }

    if(q.max){
      q.age = q.age || {};
      _.merge(q.age, {$lte : q.max});
      delete q.max;
    }

    q.isAdopted = false;

    Apartment.find(q, function(err, apartments) {
      reply.view('templates/apartments/index', {path:'/apartments', active:active, apartments:apartments});
    });
  }
};
