(function() {
    'use strict';

    angular
        .module('<%- appName %>')
        .directive('login', login);

    login.$inject = [];

    /* @ngInject */
    function login() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: FooterController,
            controllerAs: 'vm',
            link: link,
            restrict: 'A',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

    /* @ngInject */
    function FooterController() {

    }
})();