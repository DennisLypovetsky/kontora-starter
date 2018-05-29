'use strict';

global.$ = {
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  mozjpeg: require('imagemin-mozjpeg'),
  pngquant: require('imagemin-pngquant'),
  gcmq: require('gulp-group-css-media-queries'),

  path: {
    tasks: require('./gulp/config/tasks')
  }
};

// проходимся по массиву в /gulp/config/tasks.js
// и как бы require-им его сюда
$.path.tasks.forEach(function (taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  $.gulp.parallel('clean'),
  $.gulp.parallel('js:lib'),
  $.gulp.parallel('js:modules'),
  $.gulp.parallel('pug:dev', 'sass:dev', 'js:dev', 'img:dev', 'svg:copy', 'svg:sprite'),
  $.gulp.parallel('watch', 'serve')
));

$.gulp.task('build', $.gulp.series(
  $.gulp.parallel('clean'),
  $.gulp.parallel('js:lib'),
  $.gulp.parallel('js:modules'),
  $.gulp.parallel('pug:build', 'sass:build', 'js:build', 'img:build', 'svg:copy', 'svg:sprite')
));
