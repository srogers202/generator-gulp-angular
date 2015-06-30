'use strict';
/* jshint expr:true */

var path = require('path');
var fs = require('mz/fs');
var Promise = require('bluebird');


var tempDir = path.join(__dirname, '../tmp/work');
var depsDir = path.join(__dirname, '../tmp/deps');
var fixtureDir = path.join(__dirname, 'fixtures');

var chai = require('chai');
//var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.should();
chai.use(sinonChai);

var templateTools = require('../template-tools');
var mockModel = require('../template/mock-model');

var helpers = require('yeoman-generator').test;
var assert = require('yeoman-generator').assert;
var testDirectory = Promise.promisify(helpers.testDirectory);

describe('gulp-angular generator gulp scripts for less', function () {
  var model;

  this.timeout(10000);

  before(function() {
    return testDirectory(tempDir).then(function() {
      Promise.all([
        fs.symlink(path.join(fixtureDir, 'less'), path.join(tempDir, 'src')),
        fs.symlink(path.join(depsDir, 'node_modules'), path.join(tempDir, 'node_modules')),
        fs.symlink(path.join(depsDir, 'bower_components'), path.join(tempDir, 'bower_components'))
      ]);
    });
  });

  beforeEach(function() {
    model = mockModel();
    model.props.paths.src = path.join(tempDir, 'src');
    model.props.paths.tmp = path.join(tempDir, 'tmp');
    model.props.cssPreprocessor.key = 'less';
    model.props.cssPreprocessor.extension = 'less';
    return Promise.all([
      templateTools.render('_package.json', model),
      templateTools.render('_bower.json', model),
      templateTools.render('gulp/_conf.js', model),
      templateTools.render('gulp/_styles.js', model)
    ]);
  });

  it('should add each files in generator.files', function(done) {
    var gulp = require('../tmp/work/node_modules/gulp');
    require('../tmp/work/gulp/styles');
    gulp.start('styles', function() {
      var indexCss = path.join(model.props.paths.tmp, 'serve/app/index.css');
      assert(indexCss, /html div/);
      assert(indexCss, /sourceMappingURL=data:application\/json;base64/);
      done();
    });
  });

});
