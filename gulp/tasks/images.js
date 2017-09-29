
module.exports = function() {
  $.gulp.task("images", function() {
    return $.gulp.src("./app/img/**/*.*", { since: $.gulp.lastRun("images") })
      .pipe($.gulp.dest($.config.root + "/img"));
  });
};
