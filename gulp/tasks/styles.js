
module.exports = function() {
  $.gulp.task("styles", function() {
    return $.gulp.src("./app/styles/app.scss")
      .pipe($.gp.plumber({
        errorHandler: $.gp.notify.onError(function(err) {
          return {
            title: "Styles",
            message: err.message,
          };
        }),
      }))
      .pipe($.gp.if($.dev, $.gp.sourcemaps.init()))
      // .pipe($.gp.csscomb(cssCombConfig))
      .pipe($.gp.autoprefixer({ browsers: $.config.autoprefixerConfig }))
      .pipe($.gp.concat("app.css"))
      .pipe($.gulp.dest($.config.root + "/css"))
      .pipe($.gp.if(!$.dev, $.gp.csso()))
      .pipe($.gp.if($.dev, $.gp.sourcemaps.write()))
      .pipe($.gp.if(!$.dev, $.gp.rename({ suffix: ".min" })))
      .pipe($.gulp.dest($.config.root + "/css"))
      .pipe($.browserSync.stream());
  });
};

