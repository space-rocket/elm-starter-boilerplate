var Gulp = require('gulp');


Gulp.task('watch', function () {

    global.isWatching = true;
    Gulp.watch('./*.elm', ['elm']);
    Gulp.watch('./client/**/*.scss', ['sass']);
});
