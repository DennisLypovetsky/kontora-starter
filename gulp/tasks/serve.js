module.exports = function () {
  $.gulp.task('serve', function () {
    $.browserSync.init({
      server: {
        baseDir: "./build"
      },
      open: false // см. http://localhost:3000
    });
    $.browserSync.watch('build', $.browserSync.reload)
  });
}