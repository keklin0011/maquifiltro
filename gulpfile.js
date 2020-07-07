var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber');

gulp.task('sass', function() {
    gulp.src('SCSS/styles.scss')
    .pipe(plumber())
    .pipe(autoprefixer({
        versions: ['last 2 browsers']
    }))
    .pipe(sass({
        outputStyle: 'expanded', // 'compact', 'compressed', 'nested'
        sourceComments: true
    }))
    .pipe(gulp.dest('web/css/'));
});

gulp.task('serve', ['sass'], function() {
    browserSync.init(['web/css/*.css', 'web/**/*.html'], {
        server: {
            baseDir: 'web'
        }
    });
});

gulp.task('watch', ['sass', 'serve'], function() {
    gulp.watch(['SCSS/*.scss'], ['sass']);
});

gulp.task('default', ['watch']);