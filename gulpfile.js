var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function () {
    return browserify({entries: "./src/index.js"})
        .transform(babelify)
        .bundle()
        .pipe(source('game.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/**/*.js', ['build']);
});

gulp.task('default', ["watch"]);
