'use strict';

module.exports = function (theme) {
  return Object.assign(function (keys) {
    return keys.split('.').reduce(function (a, b) {
      return a && a[b] ? a[b] : null;
    }, theme);
  }, theme);
};