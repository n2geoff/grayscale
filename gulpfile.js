'use strict';

var gulp = require('gulp');
var minify = require('gulp-clean-css');
var rename = require('gulp-rename');
var myth = require('gulp-myth');

// create task
gulp.task('default', function(){
    gulp.src('src/*.css')
        .pipe(myth())
        .pipe(gulp.dest('./dist'))
        .pipe(minify())
        .pipe(rename('layout.min.css'))
        .pipe(gulp.dest('./dist'))
});
