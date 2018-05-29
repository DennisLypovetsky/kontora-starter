module.exports = function () {
  // простое копирование
  $.gulp.task('svg:copy', function () {
    return $.gulp.src(['src/static/img/**/*.svg', '!src/static/img/svg/**/*.svg'])
      .pipe($.gulp.dest('build/static/img/'));
  });

  // svg-спрайт
  $.gulp.task('svg:sprite', function () {
    return $.gulp.src('src/static/img/svg/*.svg')
      .pipe($.gp.svgmin({
        js2svg: {
          pretty: true
        }
      }))
      .pipe($.gp.cheerio({
        run: function ($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {
          xmlMode: true
        }
      }))
      .pipe($.gp.replace('&gt;', '>'))
      .pipe($.gp.svgSprite({
        mode: {
          symbol: {
            sprite: 'sprite.svg'
          }
        }
      }))
      .pipe($.gulp.dest('build/static/img/svg/'))
  });
}
