'use strict';

var mongoose = require('mongoose');

var tenantSchema = mongoose.Schema({
    name: {type: String, required: true},
    contact: {type: String, required: true},
    description: {type: String, required: true},
    //pets: [{type: mongoose.Schema.ObjectId, ref: 'Apartment'}]
});

module.exports = mongoose.model('Tenant', tenantSchema);
