var gulp = require('gulp');
var server = require('gulp-server-livereload');
var protractor = require('gulp-protractor').protractor;
var runSequence = require('run-sequence');
var restServer = require('./server/index.js');
var jshint = require('gulp-jshint');

// make sure to kill the local rest endpoint when exiting gulp
process.on('SIGINT', function() {
  restServer.stop();
  process.exit();
});

gulp.task('lint', function() {
  return gulp.src('./public/js/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('runLocalRestEndpoint', function() {
  restServer.start();
});

gulp.task('runserver-livereload', function() {
  gulp.src('public')
    .pipe(server({
      livereload: true,
      defaultFile: 'index.html',
      open: true
    }));
});

gulp.task('runserver', function() {
  gulp.src('public')
    .pipe(server({
        livereload: false,
        defaultFile: 'index.html',
        open: false
  }))
});

gulp.task('runtests', function() {
  gulp.src(['tests/e2e/*.js'])
    .pipe(protractor({
      configFile: 'tests/protractor-conf.js'
    }))
    .on('error', function(e) { throw e; })
    .once('end', function () {
      process.exit();
    });
});

gulp.task('test', function(callback) {
    runSequence('runserver', 'runtests', callback);
});

gulp.task('serve', function(callback) {
    runSequence('runLocalRestEndpoint', 'runserver-livereload', callback);
});
