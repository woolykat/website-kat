var gulp = require('gulp');
var sass = require('gulp-sass');

     gulp.task('sass', function(){
       return gulp.src('app/scss/katrina.scss')
         .pipe(sass()) // Converts Sass to CSS with gulp-sass
         .pipe(gulp.dest('app/css'))
    });

    gulp.task("watch", function() {
gulp.watch("scss");
});
