'use strict';

var mongoose = require('mongoose');


var apartmentSchema = mongoose.Schema({
    name: String,
    address: String,
    description: String,
    norooms: Number,
    price: Number,
    rooms: [{ roomNo: Number, tenant: String}],
    Vacant: {type: Boolean, default: true}


});

module.exports = mongoose.model('Apartment', apartmentSchema);
