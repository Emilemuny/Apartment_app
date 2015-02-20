'use strict';

var mongoose = require('mongoose');

var tenantSchema = mongoose.Schema({
    name: {type: String, required: true},
    address: {type: String, required: true},
    contact: {type: String, required: true},
    description: {type: String, required: true},
    age: {type: Number, required: true},
    gender: {type: String, required: true},
    photo: {type: String, required: true},
    room: [{type: mongoose.Schema.ObjectId, ref: 'Apartment'}]

});

module.exports = mongoose.model('Tenant', tenantSchema);
