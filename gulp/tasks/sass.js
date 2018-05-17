module.exports = function () {
  $.gulp.task('sass:dev', function () {
    return $.gulp.src('src/static/sass/style.sass')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError()
      }))
      .pipe($.gp.sass({
        outputStyle: 'expand'
      }))
      .pipe($.gp.autoprefixer({
        browers: ['last 2 versions']
      }))
      .pipe($.gcmq())
      .pipe($.gulp.dest('build/static/css'))
      .pipe($.gp.rename('style.min.css'))
      .pipe($.gulp.dest('build/static/css'));
  });

  $.gulp.task('sass:build', function () {
    return $.gulp.src('src/static/sass/style.sass')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError()
      }))
      .pipe($.gp.sass({
        outputStyle: 'expand'
      }))
      .pipe($.gp.autoprefixer({
        browers: ['last 2 versions']
      }))
      .pipe($.gcmq())
      .pipe($.gulp.dest('build/static/css'))
      .pipe($.gp.csso())
      .pipe($.gp.rename('style.min.css'))
      .pipe($.gulp.dest('build/static/css'));
  });
}