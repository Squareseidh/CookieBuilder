/**
 * Author : Vincent Loy <vincent.loy1@gmail.com>
 */

/*jslint indent: 4, maxlen: 100, node: true, vars: true, nomen: true */

(function () {
    'use strict';

    var gulp = require('gulp'),
        gutil = require('gulp-util'),
        notify = require('gulp-notify'),
        less = require('gulp-less'),
        minifyCSS = require('gulp-minify-css'),
        sourcemaps = require('gulp-sourcemaps'),
        plumber = require('gulp-plumber'),
        targetCSSDir = 'css/';


    // Compile Less
    // and save to target CSS directory
    gulp.task('css', function () {
        return gulp.src(targetCSSDir + '/less/style.less')
            .pipe(plumber())
            .pipe(less({style: 'compressed'})
                .on('error', gutil.log))
            .pipe(sourcemaps.init())
            .pipe(minifyCSS())
            .pipe(sourcemaps.write())
            .pipe(gulp.dest(targetCSSDir + '/dist/'));
    });

    // Keep an eye on Less
    gulp.task('watch', function () {
        gulp.watch('css/less/**/*.less', ['css']);
    });

    // What tasks does running gulp trigger?
    gulp.task('default', ['css', 'watch']);
}());
