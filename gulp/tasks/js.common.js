
module.exports = function () {
	$.gulp.task("js:common", function () {
    const sourcePath = $.path.app.src;
    const bundles = $.path.app.bundles;

    const bundled = bundles.map(function(bundle) {
      return $.browserify({
        entries: sourcePath + bundle,
        debug: true,
      })
        .transform($.babel, {
          presets: ["es2015", "env"],
          plugins: ["transform-runtime"],
        })
        .bundle()
        .on("error", $.gp.notify.onError(function (err) {
          return {
            title: "JavaScript Code",
            message: err.message,
          };
        }))
        .pipe($.source(bundle))
        .pipe($.buffer())
        .pipe($.gp.if($.dev, $.gp.sourcemaps.init({
          loadMaps: true,
        })))
        .pipe($.gulp.dest($.config.root + "/js"))
        .pipe($.gp.if(!$.dev, $.gp.uglifyjs()))
        .pipe($.gp.if($.dev, $.gp.sourcemaps.write("./maps")))
        .pipe($.gp.if(!$.dev, $.gp.rename({ suffix: ".min" })))
        .pipe($.gulp.dest($.config.root + "/js"));
        // .pipe($.browserSync.stream());
    });

    return $.merge(bundled);
	});
};

// "parser": "babel-eslint",
// presets: ["env"],
// plugins: ["transform-runtime"]
