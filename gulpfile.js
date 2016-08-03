/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
    gutil = require('gulp-util');

// create a default task and just log a message
gulp.task('default', function () {
    return gutil.log('Gulp is running!')
});

gulp.task('copyImpress', function () {
    // copy any html files in source/ to public/
    gulp.src('bower_components/impress-js/js/*').pipe(gulp.dest('public/javascripts'));
    gulp.src('bower_components/impress-js/css/*').pipe(gulp.dest('public/stylesheets'));
});

