module.exports = function () {
  $.gulp.task('responsive', function () {
    return $.gulp.src([
      'src/static/data-img/**/*.{png,jpg}',
      'src/blocks/**/*.{png,jpg}',
      '!src/blocks/**/*_*.{png,jpg}',
      '!src/blocks/favicon/**/*.{png,jpg}',
    ])
      .pipe($.gp.responsive({
        '**/*.png': [{
          width: 2560,
          rename: {
            suffix: '_2560'
          }
        }, {
          width: 1920,
          rename: {
            suffix: '_1920'
          }
        }, {
          width: 1440,
          rename: {
            suffix: '_1440'
          }
        }, {
          width: 1080,
          rename: {
            suffix: '_1080'
          }
        }, {
          width: 720,
          rename: {
            suffix: '_720'
          }
        }],
        '**/*.jpg': [{
          width: 2560,
          rename: {
            suffix: '_2560'
          }
        }, {
          width: 1920,
          rename: {
            suffix: '_1920'
          }
        }, {
          width: 1440,
          rename: {
            suffix: '_1440'
          }
        }, {
          width: 1280,
          rename: {
            suffix: '_1280'
          }
        }, {
          width: 1080,
          rename: {
            suffix: '_1080'
          }
        }, {
          width: 720,
          rename: {
            suffix: '_720'
          }
        }]
      }, {
          format: 'jpg',
          progressive: true,
          withMetadata: false,
          withoutEnlargement: true,
          errorOnEnlargement: false,
          errorOnUnusedConfig: false,
          errorOnUnusedImage: false
        })
      )
      .pipe($.gulp.dest('src/blocks'));
  });
}
