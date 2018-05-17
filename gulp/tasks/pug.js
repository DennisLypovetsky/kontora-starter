module.exports = function () {
  $.gulp.task('pug:dev', function () {
    return $.gulp.src('src/pug/pages/*.pug')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError('Pug: <%= error.message %>')
      }))
      .pipe($.gp.pug({
        pretty: true
      }))
      .pipe($.gulp.dest('build'));
  });

  $.gulp.task('pug:build', function () {
    return $.gulp.src('src/pug/pages/*.pug')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError('Pug: <%= error.message %>')
      }))
      .pipe($.gp.pug({
        pretty: false
      }))
      .pipe($.gulp.dest('build'));
  });
}