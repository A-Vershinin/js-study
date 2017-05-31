'use strict';

module.exports = function() {
  $.gulp.task('styles', function() {
    return $.gulp.src('./app/styles/app.css')
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function(err) {
          return {
            title: 'Styles',
            message: err.message
          }
        })
      }))
      .pipe($.gp.autoprefixer({
        browsers: $.config.autoprefixerConfig
      }))
      .pipe($.gp.concat('app.css'))
      // .pipe($.gp.csscomb(cssCombConfig))
      .pipe($.gulp.dest($.config.root + '/css'))
      .pipe($.gp.csso())
      .pipe($.gp.rename({suffix: '.min'}))
      .pipe($.gulp.dest($.config.root + '/css'))
      .pipe($.browserSync.stream());
  })
};
