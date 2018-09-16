var gulp            = require('gulp');
var concat          = require('gulp-concat');
var uglify          = require('gulp-uglifyjs');
var cssnano         = require('gulp-cssnano');
var cache           = require('gulp-cache');

var srcPath     = "src/";
var distPath    = "dist/";
var examplePath = "example/";

// Building js
gulp.task('create-dist-js', function() {
    return gulp.src([
        srcPath + 'jquery.epcounter.js'
    ])
        .pipe(concat('jquery.epcounter.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(distPath));
});

// Building css
gulp.task('create-example-css', function() {
    return gulp.src([
        examplePath + 'styles.css'
    ])
        .pipe(concat('styles.min.css'))
        .pipe(cssnano())
        .pipe(gulp.dest(examplePath));
});

// Copy
gulp.task('copy-files', function() {

    var epcounterJs =  gulp.src([
        srcPath + 'jquery.epcounter.js'
    ])
        .pipe(gulp.dest(distPath));
});

// Clearing the cache
gulp.task('clear', function (done) {
    return cache.clearAll(done);
});

// ======================================================
// Distributions
// ======================================================

// Clear distribution dir
gulp.task('clear-dist', function() {
    return del(distPath + '**');
});

// Compiling distribution files
gulp.task('dist', ['create-dist-js', 'copy-files'], function() {});

// ======================================================
// Example
// ======================================================

// Compiling example files
gulp.task('example', ['create-example-css'], function() {});

// ======================================================
// Default
// ======================================================

gulp.task('default', ['clear', 'example', 'dist']);