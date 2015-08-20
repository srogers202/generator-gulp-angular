(function() {
    'use strict';

    angular
        .module('<%- appName %>')
        .service('AddressLookupService', AddressLookupService);

    AddressLookupService.$inject = [];

    /* @ngInject */
    function AddressLookupService() {
        this.func = func;

        ////////////////

        function func() {
        }
    }
})();