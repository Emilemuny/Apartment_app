'use strict';

var mongoose = require('mongoose');

var apartmentSchema = mongoose.Schema({
    name: String,
    address: String,
    norooms: Number,
    price: Number,
    //rooms:[ {type: Schema.Types.ObjectId, ref: 'rooms'} ]

});

var roomsSchema = mongoose.Schema({
    name :String,
    price : Number,
});

module.exports = mongoose.model('Rooms', roomsSchema);
module.exports = mongoose.model('Apartment', apartmentSchema);
