"use strict";

module.exports = function() {
  $.gulp.task("js:lint", function () {
    return $.gulp.src($.path.app)
      .pipe($.gp.eslint(".eslintrc"))
      .pipe($.gp.eslint.format($.gp.friendlyFormatter))
      .pipe($.gp.eslint.failAfterError())
      .on("error", $.gp.notify.onError({
        title: "Gulp: ESLint",
        message: "Error: <%= error.message %",
      }));
  })
};
