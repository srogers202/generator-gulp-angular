'use strict';

var _ = require('lodash');

var alwaysUsedTechs = [ 'angular', 'browsersync', 'gulp', 'jasmine', 'karma', 'protractor' ];

module.exports = function(GulpAngularGenerator) {

  /**
   * Format list techs used to generate app included in main view of sample
   */
  GulpAngularGenerator.prototype.computeTechs = function computeTechs() {
    var usedTechs = alwaysUsedTechs.concat([
      this.props.jQuery.name,
      this.props.ui.key,
      this.props.bootstrapComponents.key,
      this.props.foundationComponents.key,
      this.props.cssPreprocessor.key,
      this.props.jsPreprocessor.key,
      this.props.htmlPreprocessor.key
    ])
      .filter(_.isString)
      .filter(function(tech) {
        return tech !== 'default' && tech !== 'css' && tech !== 'official' && tech !== 'none';
      });

    this.technologies = JSON.stringify(usedTechs).replace(/"/g, '\'');
  };

};
