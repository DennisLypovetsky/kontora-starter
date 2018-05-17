module.exports = function () {
  // Сторонние библиотеки и плагины
  $.gulp.task('js:lib', function () {
    return $.gulp.src([
      'node_modules/jquery/dist/jquery.js'
    ])
      .pipe($.gp.concat('libs.js'))
      .pipe($.gulp.dest('src/static/js/'));
  });

  // Собирает в два одинаковых файла с разным названием
  $.gulp.task('js:dev', function () {
    return $.gulp.src([
      'src/static/js/libs.js',
      'src/static/js/main.js'
    ])
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError()
      }))
      .pipe($.gp.concat('scripts.js'))
      .pipe($.gulp.dest('build/static/js/'))
      .pipe($.gp.rename('scripts.min.js'))
      .pipe($.gulp.dest('build/static/js/'));
  });

  // Собирает и минифицирует
  $.gulp.task('js:build', function () {
    return $.gulp.src([
      'src/static/js/libs.js',
      'src/static/js/main.js'
    ])
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError()
      }))
      .pipe($.gp.concat('scripts.js'))
      .pipe($.gulp.dest('build/static/js/'))
      .pipe($.gp.uglify())
      .pipe($.gp.rename('scripts.min.js'))
      .pipe($.gulp.dest('build/static/js/'));
  });
};