/* global toastr:false, moment:false */
(function() {
  'use strict';

  angular
    .module('<%- appName %>')
    .constant('toastr', toastr)
    .constant('moment', moment);

})();
