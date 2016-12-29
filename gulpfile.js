const gulp = require('gulp');
const eslint = require('gulp-eslint');
const run = require('run-sequence');

const paths = {
  js: ['./*.js'],
  destination: './app',
  spec: 'app/spec',
  scripts: 'app/scripts',
  tmp: 'tmp',
  zipSource: ['./app/**/*', './node_modules/**/*'],
};

gulp.task('run_index', function() {
  run('node --harmony index.js');
});

gulp.task('default', function() {
  run('run_index');
});

gulp.task('lint', () => {
  return gulp.src(paths.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
