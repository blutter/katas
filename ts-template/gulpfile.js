var gulp = require("gulp");
var jasmine = require('gulp-jasmine');
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var runSequence = require('run-sequence');

gulp.task("default", function () {
    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest("dist"));
});

gulp.task('test', function() {
   return gulp.src('src/*.spec.js')
      .pipe(jasmine());
});

gulp.task('watch', function() {
  runSequence('default');
  gulp.watch('src/*.ts', ['default']);
});
