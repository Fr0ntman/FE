const gulp = require('gulp');
const newer = require('gulp-newer');
const rename = require('gulp-rename');

gulp.task('copy:html', () => {
  return gulp.src('**/*.html',
    {
      cwd: 'src/html',
      base: 'src/html'
    })
    .pipe(newer('public'))
    .pipe(gulp.dest('public'))
});

gulp.task('copy:resource', () => {
  return gulp.src('**/*',
    {
      cwd: 'src/resource',
      base: 'src/resource'
    })
    .pipe(newer('public'))
    .pipe(gulp.dest('public'))
});

gulp.task('copy:img', () => {
  return gulp.src('**/*.{jpeg,png,svg}',
    {
      cwd: 'src/images',
      base: 'src/images'
    })
    .pipe(newer('public'))
    .pipe(gulp.dest('public'))
});

gulp.task('copy', [
  'copy:html',
  'copy:resource'
]);
