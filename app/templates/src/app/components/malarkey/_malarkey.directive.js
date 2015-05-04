(function() {
  'use strict';

  angular
    .module('<%= appName %>')
    .directive('acmeMalarkey', acmeMalarkey);

  /** @ngInject */
  function acmeMalarkey(malarkey, $timeout) {
    var directive = {
      restrict: 'E',
      scope: {
        acmeMalarkeyValue: '=',
        acmeMalarkeyValues: '='
      },
      template: '<div></div>',
      link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, vm) {
      var speed = 40;
      var stop = false;

      var typist = malarkey(el[0], {
        typeSpeed: speed,
        deleteSpeed: speed,
        pauseDelay: speed * 20,
        loop: true,
        postfix: ' '
      });

      scope.$watchCollection('acmeMalarkeyValues', function(values) {
        angular.forEach(values, function(value) {
          typist.type(value.title).pause().delete();
        });
      });

      $timeout(refreshTick);

      function refreshTick() {
        scope.acmeMalarkeyValue = el.html().substring(11).trim();

        if(!stop) {
          $timeout(refreshTick, speed);
        }
      }

      scope.$on('$destroy', function() {
        stop = true;
      });
    }
  }

})();
