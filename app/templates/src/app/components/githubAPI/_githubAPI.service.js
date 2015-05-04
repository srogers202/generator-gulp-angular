(function() {
  'use strict';

  angular
    .module('<%= appName %>')
    .factory('githubApi', githubApi);

  /** @ngInject */
  function githubApi($log, $http) {
    var techsUrl = 'https://rawgit.com/Swiip/generator-gulp-angular/master/app/techs.json';

    var service = {
      techsUrl: techsUrl,
      getTechs: getTechs
    };

    return service;

    function getTechs(limit) {
      return $http.get(techsUrl)
        .then(getTechsComplete)
        .catch(getTechsFailed);

      function getTechsComplete(response) {
        return response.data;
      }

      function getTechsFailed(error) {
        $log.error('XHR Failed for getContributors.\n' + angular.toJson(error.data, true));
      }
    }
  }
})();
