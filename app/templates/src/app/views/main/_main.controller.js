(function() {
  'use strict';

  angular
    .module('<%- appName %>')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr) {
    var vm = this;

    vm.creationDate = <%- new Date().getTime() %>;
    vm.showToastr = showToastr;

    activate();

    function activate() {
    }

    function showToastr() {
      toastr.info('Message to the user');
    }
  }
})();
