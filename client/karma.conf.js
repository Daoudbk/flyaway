module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-route/angular-route.js',
      'app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'app/bower_components/lodash/dist/lodash.min.js',
      'app/bower_components/angular-animate/angular-animate.min.js',
      'app/bower_components/angular-aria/angular-aria.min.js',
      'app/bower_components/hammerjs/hammer.min.js',
      'app/bower_components/angular-material/angular-material.min.js',
      'app/bower_components/restangular/dist/restangular.min.js',
      'app/bower_components/mobile-angular-ui/dist/js/mobile-angular-ui.min.js',

      'app/scripts/*.js',
      'app/scripts/**/**/*.js',
      'test/spec/**/*.js',
      'app/views/**/*.html'
    ],
    preprocessors: {
      'app/views/**/*.html': ['ng-html2js']
    },
    ngHtml2JsPreprocessor: {
      stripPrefix: 'app/',
      moduleName: 'templates'
    },
    plugins: [
      'karma-jasmine',
      'karma-phantomjs-launcher',
      'karma-ng-html2js-preprocessor'
    ],
    exclude: [],
    port: 8083,

    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: false
  });
};
