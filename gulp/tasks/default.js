const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('default', () => {
  global.isWatch = true;
  runSequence(
    'build',
    'server',
    'watch'
  );
});

gulp.task('build', ['clean'], () => {
  runSequence(
    [
      'copy',
      'styles-dependence',
      'templates',
      'scripts'
    ]
  );
});

gulp.task('styles-dependence', () => {
  runSequence(
    'svg-icon',
    'styles'
  );
});
