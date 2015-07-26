var gulp            = require('gulp');
var browserSync     = require('browser-sync').create();
var sass            = require('gulp-sass');
var autoprefixer    = require('gulp-autoprefixer');


// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("src/scss/**/*.scss", ['sass']);
    gulp.watch(["*.html",'js/**/*']).on('change', browserSync.reload);
});

function swallowError (error) {

    //If you want details of the error in the console
    console.log(error.toString());

    this.emit('end');
}

// Compile sass into auto-prefixed CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("src/scss/style.scss")
        .pipe(sass().on('error',swallowError))
        .pipe(autoprefixer('last 2 version').on('error',swallowError))
        .pipe(gulp.dest("css"))
        .pipe(browserSync.stream()) ;
});

gulp.task('default', ['serve']);