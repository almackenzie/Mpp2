/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    htmlmin = require('gulp-htmlmin');

// create a default task and just log a message
gulp.task('default', ['watchSrc'], function () {
    return gutil.log('Gulp is running and watching!')
});

gulp.task('watchSrc', function () {
    gulp.watch('src/html/**/*', ['copyStaticHtml']);
});

gulp.task('copyImpress', function () {
    // copy any html files in source/ to public/
    gulp.src('bower_components/impress-js/js/*').pipe(gulp.dest('public/javascripts'));
    gulp.src('bower_components/impress-js/css/*').pipe(gulp.dest('public/stylesheets'));
});

gulp.task('copyStaticHtml', function () {
    // copy any html files in source/ to public/
    gulp.src('src/html/**/*')
        .pipe(htmlmin({
            removeComments: true
        }))
        .pipe(gulp.dest('public/html'));
});

