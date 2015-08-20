'use strict';

module.exports = function(GulpAngularGenerator) {

  /**
   * Add files of the navbar and the main view depending on the ui framework
   * and the css preprocessor
   */
  GulpAngularGenerator.prototype.uiFiles = function uiFiles() {
    this.files.push({
      src: 'src/app/core/navigation/navbar/__' + this.props.ui.key + '-navbar.html',
      dest: 'src/app/core/navigation/navbar/navbar.html',
      template: false
    });

    if(this.props.router.module !== null) {
      this.files.push({
        src: 'src/app/views/main/__' + this.props.ui.key + '.html',
        dest: 'src/app/views/main/main.html',
        template: true
      });
    }

    this.files.push({
      src: 'src/app/_' + this.props.ui.key + '/__' + this.props.ui.key + '-index.' + this.props.cssPreprocessor.extension,
      dest: 'src/app/index.' + this.props.cssPreprocessor.extension,
      template: true
    });

    this.files.push({
      src: 'src/app/core/navigation/navbar/__navbar.' + this.props.cssPreprocessor.extension,
      dest: 'src/app/core/navigation/navbar/navbar.' + this.props.cssPreprocessor.extension,
      template: false
    });
  };

};
