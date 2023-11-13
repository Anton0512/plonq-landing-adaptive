const { watch } = require('gulp');
var gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var concat = require('gulp-concat');
sass.compiler = require('node-sass');

gulp.task('sass', function () {
   return gulp.src('./src/sass/**/*.scss')
       .pipe(sass().on('error', sass.logError))
       .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
   gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
});




