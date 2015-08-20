(function() {
    'use strict';

    angular
        .module('<%- appName %>')
        .directive('footer', footer);

    footer.$inject = [];

    /* @ngInject */
    function footer() {
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