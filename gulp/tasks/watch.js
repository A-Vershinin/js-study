'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./app/*.html', $.gulp.series('html'));
    $.gulp.watch('./app/styles/*.css', $.gulp.series('styles'));
    $.gulp.watch('./app/js/**/*.js', $.gulp.series('js:common'));
    $.gulp.watch('./app/img/**/*.*', $.gulp.series('images'));
    $.gulp.watch('./app/fonts/**/*.*', $.gulp.series('fonts'));
  });
};

// gulp.task('watch', function() {
//   gulp.watch('sass/**/*.scss', gulp.series('style'));
// });
// Не используйте в вотчере такую конструкрую, пишите прямо все папки
// где искать, к примеру вот так
// gulp.watch(['sass/*.scss', 'sass/block/*.scss', 'sass/page/*.scss'], gulp.series('style'));
