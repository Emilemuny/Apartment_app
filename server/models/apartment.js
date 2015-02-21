'use strict';

var mongoose = require('mongoose');


var apartmentSchema = mongoose.Schema({
    name: String,
    address: String,
    description: String,
    norooms: Number,
    price: Number,
    rooms: [{tenant: String, roomno: Number}],
    Vacant: {type: Boolean, default: true}


});

module.exports = mongoose.model('Apartment', apartmentSchema);
