'use strict';

module.exports = [
  {method: 'get', path: '/{param*}', config: require('../routes/general/static')},
  {method: 'get', path: '/', config: require('../routes/general/home')},
  {method: 'get', path: '/authorizedhome', config: require('../routes/general/authorizedhome')},


  {method: 'get', path: '/apartments', config: require('../routes/apartments/index')},
  {method: 'get', path: '/apartments/new', config: require('../routes/apartments/new')},
  {method: 'post', path: '/apartments', config: require('../routes/apartments/create')},
  {method: 'get', path: '/apartments/{apartmentId}', config: require('../routes/apartments/show')},
  {method: 'post', path: '/apartments/{apartmentId}/delete', config: require('../routes/apartments/destroy')},
  {method: 'get', path: '/apartments/{apartmentId}/edit', config: require('../routes/apartments/edit')},
  {method: 'post', path: '/apartments/{apartmentId}', config: require('../routes/apartments/update')},
  {method: 'post', path: '/apartments/{apartmentId}/adopt', config: require('../routes/apartments/adopt')},

  {method: 'get', path: '/tenants', config: require('../routes/tenants/index')},
  {method: 'get', path: '/tenants/new', config: require('../routes/tenants/new')},
  {method: 'post', path: '/tenants', config: require('../routes/tenants/create')},
  {method: 'get', path: '/tenants/{tenantId}', config: require('../routes/tenants/show')},
  {method: 'post', path: '/tenants/{tenantId}/delete', config: require('../routes/tenants/destroy')},
  {method: 'get', path: '/tenants/{tenantId}/edit', config: require('../routes/tenants/edit')},
  {method: 'post', path: '/tenants/{tenantId}', config: require('../routes/tenants/update')},

  {method: 'get', path: '/register', config: require('../routes/users/new')},
  {method: 'post', path: '/users', config: require('../routes/users/create')},
  {method: 'get', path: '/login', config: require('../routes/users/login')},
  {method: 'post', path: '/users/authenticate', config: require('../routes/users/authenticate')},
  {method: 'post', path: '/logout', config: require('../routes/users/logout')}
];
