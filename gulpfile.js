/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    htmlmin = require('gulp-htmlmin');

// create a default task and just log a message
gulp.task('default', ['watchSrc'], function () {
    return gutil.log('Gulp is running and watching!')
});

gulp.task('copyAll', ['copyStaticHtml', 'copyStaticJs', 'copyStaticCss', 'copyStaticImages'], function () {
    return gutil.log('everything copied')
});


gulp.task('watchSrc', function () {
    gulp.watch('src/html/**/*', ['copyStaticHtml']);
    gulp.watch('src/js/**/*', ['copyStaticJs']);
    gulp.watch('src/css/**/*', ['copyStaticCss']);
    gulp.watch('src/images/**/*', ['copyStaticImages']);
});

gulp.task('copyBowerModules', function () {
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

gulp.task('copyStaticJs', function () {
    // copy any html files in source/ to public/
    gulp.src('src/js/**/*')
        .pipe(gulp.dest('public/javascripts'));
});

gulp.task('copyStaticCss', function () {
    // copy any html files in source/ to public/
    gulp.src('src/css/**/*')
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('copyStaticImages', function () {
    // copy any html files in source/ to public/
    gulp.src('src/img/**/*')
        .pipe(gulp.dest('public/images'));
});

