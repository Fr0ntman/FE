const gulp = require('gulp');
const config = require('../config.js');

gulp.task('watch', () => {
  gulp.watch(`${config.path.styles}**/*.sass`, ['styles']);
  gulp.watch(`${config.path.templates}**/*.slm`, ['slim']);
  gulp.watch('./src/html/**/*.html', ['copy:html']);
});
