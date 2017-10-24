var browserSync = require('browser-sync').create(),
    gulp = require('gulp'), // necessary???
    exec = require('child_process').exec;

// LIBRARY
var librarySrc = '../library/**/*.*',
    libraryHomepage = "..library/index.html";


//gulp.task('browserSync', ['metalsmith'], function() {
gulp.task('browserSync', function() {
    browserSync.init({
        // proxy: {
        //     target: "dev.subzero.com/library/"
        // }
        server: {
            baseDir: ["../library", "../"]
        }
    })
})

//--------------------------------------------------------------------------------------------------------------------------//
// CONTENT MANAGEMENT LIBRARY MANAGEMENT
//--------------------------------------------------------------------------------------------------------------------------//
gulp.task('build-content-management-library', ['build-content-management']);

gulp.task('build-content-management', function(cb) {
    console.log('Building Content Management Library...');
    exec('node build-content-management', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

//--------------------------------------------------------------------------------------------------------------------------//
// DEVLOPMENT LIBRARY MANAGEMENT
//--------------------------------------------------------------------------------------------------------------------------//
gulp.task('build-development-library', ['build-development']);

gulp.task('build-development', function(cb) {
    console.log('Building Development Library...');
    exec('node build-development', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

//--------------------------------------------------------------------------------------------------------------------------//
// DOCUMENTATION LIBRARY MANAGEMENT
//--------------------------------------------------------------------------------------------------------------------------//
gulp.task('build-documentation-library', ['build-documentation']);

gulp.task('build-documentation', function(cb) {
    console.log('Building Documentation Library...');
    exec('node build-documentation', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

//--------------------------------------------------------------------------------------------------------------------------//
// HOMEPAGE MANAGEMENT
//--------------------------------------------------------------------------------------------------------------------------//
gulp.task('build-homepage', ['build-home']);

gulp.task('build-home', function(cb) {
    console.log('Building Homepage...');
    exec('node build-homepage', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

//--------------------------------------------------------------------------------------------------------------------------//
// INTL DISTRIBUTOR KIT MANAGEMENT
//--------------------------------------------------------------------------------------------------------------------------//
gulp.task('build-toolkit-library', ['build-toolkit']);

gulp.task('build-toolkit', function(cb) {
    console.log('Building International Distributor Toolkit...');
    exec('node build-toolkit', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

//--------------------------------------------------------------------------------------------------------------------------//
// PATTERN LIBRARY MANAGEMENT
//--------------------------------------------------------------------------------------------------------------------------//
gulp.task('build-patterns-library', ['build-patterns']);

gulp.task('build-patterns', function(cb) {
    console.log('Building Pattern Library...');
    exec('node build-patterns', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});

//--------------------------------------------------------------------------------------------------------------------------//
// BUILD ALL LIBRARIES
//--------------------------------------------------------------------------------------------------------------------------//
// gulp.task('build-all-libraries', ['build-homepage', 'build-content-management-library', 'build-documentation-library', 'build-patterns-library'])
gulp.task('build-all-libraries', ['build-homepage', 'build-content-management-library', 'build-development-library', 'build-documentation-library', 'build-patterns-library', 'build-toolkit-library'])

//--------------------------------------------------------------------------------------------------------------------------//
// WATCH
//--------------------------------------------------------------------------------------------------------------------------//
// spin up local server and start watching libraries and templates
gulp.task('default', ['build-all-libraries', 'browserSync', 'watch']);

// Watched folders and their assigned tasks
gulp.task('watch', ['browserSync'], function () {
    // Homepage
    gulp.watch('./html/**/index.md', { interval: 1000 }, ['build-all-libraries']);
    // content management library
    gulp.watch('./html/content-management/**/*.md', { interval: 1000 }, ['build-content-management-library']);
    // development library
    gulp.watch('./html/development/**/*.md', { interval: 1000 }, ['build-development-library']);
    // documentation library
    gulp.watch('./html/documentation/**/*.md', { interval: 1000 }, ['build-documentation-library']);
    // pattern library
    gulp.watch(['./html/patterns/**/*.md', './html/patterns/**/*.html'], { interval: 1000 }, ['build-patterns-library']);
     // toolkit library
    gulp.watch('./html/international-toolkit/**/*.md', { interval: 1000 }, ['build-toolkit-library']);
    // build all libraries when templates change
    gulp.watch('./templates/**/*.hbt', { interval: 1000 }, ['build-all-libraries']);
});
