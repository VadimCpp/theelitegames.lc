/**
 * Created by vadymkaninskyi on 02/04/16.
 */

var gulp = require('gulp');
var closureCompiler = require('gulp-closure-compiler');
var runSequence = require('run-sequence');
var sass = require('gulp-sass');
var del = require('del');
var cssmin = require('gulp-cssmin');


gulp.task('js', function() {
    return gulp.src(['src/js/theEliteGames/**/*.js', 'src/js/closure-library/closure/goog/**/*.js'])
        .pipe(closureCompiler({
                compilerPath: 'src/js/closure-library/closure/bin/build/compiler.jar',
                fileName: 'app.js',
                compilerFlags: {
                    closure_entry_point: 'theEliteGames.App',
                    compilation_level: 'ADVANCED_OPTIMIZATIONS',
                    //compilation_level: 'WHITESPACE_ONLY',
                    only_closure_dependencies: true,
                    warning_level: 'VERBOSE'
                }
            })
        )
        .pipe(gulp.dest('dist/js'));

});


gulp.task('del', function () {
    return del([
        'dist/**/*'
    ]);
});


gulp.task('html', function() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('dist'));
});


gulp.task('sass', function() {
    gulp.src('src/sass/style.scss')
        .pipe(sass())
        .pipe(cssmin())
        .pipe(gulp.dest('dist/css'));
});


gulp.task('img', function() {
    return gulp.src('src/img/**/*.png')
        .pipe(gulp.dest('dist/img'));
});


gulp.task('build', function(callback) {
    runSequence('del', 'html', 'sass', 'img', 'js', callback);
});


gulp.task('watch', function() {
    gulp.watch('src/src/index.html', ['build']);
    gulp.watch('src/sass/style.scss', ['build']);
    gulp.watch('src/js/theEliteGames/**/*.js', ['build']);
});


gulp.task('default', ['build', 'watch']);
