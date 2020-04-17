'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    return gulp.src('./scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', () => {
    gulp.watch('scss/**/*.scss', gulp.series('sass'));
});