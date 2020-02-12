module.exports = function () {
  $.gulp.task('sass:dev', function () {
    return $.gulp.src('src/styles/styles.scss')
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError()
      }))
      // .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
      .pipe($.gp.sass({
        outputStyle: 'expand'
      }))
      .pipe($.gp.autoprefixer({
        browers: ['last 2 versions'],
        flexbox: 'no-2009'
      }))
      .pipe($.gp.sourcemaps.write('.'))
      .pipe($.gulp.dest('build/css'))
      .pipe($.gp.rename('styles.min.css'))
      .pipe($.gulp.dest('build/css'))
      .pipe($.browserSync.reload({
        stream: true
      }));
  });

  $.gulp.task('sass:build', function () {
    return $.gulp.src('src/styles/styles.scss')
      // .pipe($.gp.plumber({
      //   errorHandler: $.gp.notify.onError()
      // }))
      .on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
      .pipe($.gp.sass({
        outputStyle: 'expand'
      }))
      .pipe($.gp.autoprefixer({
        browers: ['last 2 versions'],
        flexbox: 'no-2009'
      }))
      .pipe($.gulp.dest('build/css'))
      .pipe($.gp.csso())
      .pipe($.gp.rename('styles.min.css'))
      .pipe($.gulp.dest('build/css'));
  });
}
