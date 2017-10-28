var gulp = require('gulp');

var uglify = require('gulp-uglify'),
    browserSync = require('browser-sync'),
	sass = require('gulp-sass');



var jsfiles = '';
// TODO 6.3a - include browserSync
gulp.task('styles', function() {
    gulp.src('app/styles/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/styles/css/'));
});

gulp.task('minify', function() {
  gulp.src('app/scripts/main.js')
  .pipe(uglify())
  .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
  gulp.watch('app/styles/sass/**/*.scss');
});

gulp.task('serve', function() {
  browserSync.init({
    server: 'app',
    port: 3000
  });
  gulp.watch('app/styles/sass/**/*.scss',['styles']).on('change', browserSync.reload);
  gulp.watch('app/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['minify','serve']);
