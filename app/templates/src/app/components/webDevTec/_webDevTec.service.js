(function() {
  'use strict';

  angular
      .module('<%= appName %>')
      .service('webDevTec', webDevTec);

  /** @ngInject */
  function webDevTec(githubApi) {
    var techList = <%= technologies %>;

    this.getTec = getTec;

    function getTec() {
      return githubApi.getTechs()
        .then(function(techs) {
          var result = [];

          techList.forEach(function(tech) {
            techs[tech].key = tech;
            result.push(techs[tech]);
          });

          return result;
        });
    }
  }

})();
