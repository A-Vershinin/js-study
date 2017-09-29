
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

global.$ = {
  dev: isDevelopment,
	package: require("./package.json"),
	config: require("./gulp/config"),
	// cssCombConfig: require("./csscomb.json"),
	path: {
		task: require("./gulp/paths/tasks.js"),
		jsFoundation: require("./gulp/paths/js.bundle.js"),
		cssFoundation: require("./gulp/paths/css.bundle.js"),
		app: require("./gulp/paths/app.js"),
	},
	gulp: require("gulp"),
	del: require("del"),
	// mqpacker: require("css-mqpacker"),
	merge: require("merge-stream"),
	browserify : require("browserify"),
	source : require("vinyl-source-stream"),
	buffer : require("vinyl-buffer"),
	babel : require("babelify"),
	fs : require("fs"),
  browserSync: require("browser-sync").create(),
  // rollup: require("gulp-better-rollup"),
	gp: require("gulp-load-plugins")({
		rename: {
		  // "gulp-better-rollup": "gulp-rollup",
			"gulp-css-unit": "cssunit",
		},
	}),
};
$.path.task.forEach(function (taskPath) {
	require(taskPath)();
});
$.gulp.task("default", $.gulp.series(
	"clean",
	$.gulp.parallel(
		"html",
		"styles",
		"css:bundle",
		"js:common",
		"js:bundle",
		"images",
		"fonts"
		// "js:lint"
	),
	$.gulp.parallel(
		"watch",
		"serve"
	)
));

$.gulp.task('build', $.gulp.series(
  'clean',
  $.gulp.parallel(
    "html",
    "styles",
    "css:bundle",
    "js:common",
    "js:bundle",
    "images",
    "fonts"
  )
));

