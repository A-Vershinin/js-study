
module.exports = function() {
  $.gulp.task("html", function() {
    return $.gulp.src("./app/*.html")
      .pipe($.gulp.dest($.config.root));
  });
};
