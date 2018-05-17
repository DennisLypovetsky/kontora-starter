module.exports = function () {
  $.gulp.task('img:dev', function () {
    return $.gulp.src('src/static/img/**/*.{png,jpg,webp}')
      .pipe($.gulp.dest('build/static/img/'));
  });

  $.gulp.task('img:build', function () {
    return $.gulp.src('src/static/img/**/*.{png,jpg,webp}')
      .pipe($.gp.imagemin([
        $.mozjpeg({
          quality: 65
        }),
        $.pngquant({
          quality: 65,
          speed: 1
        })
      ]))
      .pipe($.gulp.dest('build/static/img/'));
  });
}