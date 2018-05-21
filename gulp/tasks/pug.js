// let dataJson = require('/src/markup/pages/index/index__hero.json')

module.exports = function () {
  $.gulp.task('pug:dev', function () {
    return $.gulp.src('src/markup/pages/*.pug')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError('Pug: <%= error.message %>')
      }))
      .pipe($.gp.pug({
        locals: ('./src/markup/pages/**/*.json', 'utf8'),
        pretty: true
      }))
      .pipe($.gulp.dest('build'));
  });

  $.gulp.task('pug:build', function () {
    return $.gulp.src('src/markup/pages/*.pug')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError('Pug: <%= error.message %>')
      }))
      .pipe($.gp.pug({
        // locals: dataJson,
        pretty: false
      }))
      .pipe($.gulp.dest('build'));
  });
}
