"use strict";

module.exports = function() {
	$.gulp.task("js:lint", function () {
		return $.gulp.src($.path.app)
			.pipe($.gp.eslint())
			.pipe($.gp.eslint.format($.gp.friendlyFormatter))
			.pipe($.gp.eslint.failAfterError())
			.on("error", $.gp.notify.onError({
				title: "ESLint error",
				message: "Error: <%= error.message %",
			}));
	})
};
