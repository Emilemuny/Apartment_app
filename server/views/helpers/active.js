'use strict';

module.exports = function(currentPath, expectedPath) {
  if (currentPath === expectedPath) {
    return 'active';
  }
};
