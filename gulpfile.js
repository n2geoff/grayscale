'use strict';

var gulp = require('gulp');
var minify = require('gulp-clean-css');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var myth = require('gulp-myth');

// create task
gulp.task('default', function () {
    gulp.src('src/*.css')
        .pipe(concat('grayscale.css'))
        .pipe(myth())
        .pipe(gulp.dest('./dist'))
        .pipe(minify())
        .pipe(rename('grayscale.min.css'))
        .pipe(gulp.dest('./dist'))
});
