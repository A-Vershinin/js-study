

module.exports = function() {
  $.gulp.task("serve", function() {
    $.browserSync.init({
      browser: "chrome",
      notify: false,
      open: true,
      server: $.config.root,
      ui: false,
      cors: true,
      port: 3000,
      // tunnel: true,
      logPrefix: "front-end",
    });

    $.browserSync.watch([$.config.root + "/**/*.*"], $.browserSync.reload);
  });
};
