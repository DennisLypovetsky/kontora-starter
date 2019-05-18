module.exports = function () {
  $.gulp.task('watch', function () {
    $.gulp.watch('src/markup/**/*.pug', $.gulp.series('pug:dev'));
    $.gulp.watch('src/styles/**/*.sass', $.gulp.series('sass:dev'));
    $.gulp.watch('src/js/main.js', $.gulp.series('js:dev'));
    $.gulp.watch('src/static/img/svg/*.svg', $.gulp.series(['svg:copy', 'svg:sprite']));
    $.gulp.watch('src/static/img/**/*', $.gulp.series('img:dev'));
  });
}
