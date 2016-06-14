var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');
var runSequence = require('run-sequence');

var distPath = 'dist';

gulp.task('default', ['copy-html'], function () {
    return gulp.src('src/*.ts')
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest(distPath));
});

gulp.task('test', function() {
   return gulp.src('src/*.spec.js')
      .pipe(jasmine());
});

gulp.task('copy-html', function() {
  return gulp.src('src/*.html')
      .pipe(gulp.dest(distPath));
});

gulp.task('watch', function() {
  runSequence('default');
  gulp.watch('src/*.ts', ['default']);
});
