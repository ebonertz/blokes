const gulp = require('gulp');
const eslint = require('gulp-eslint');
const run = require('run-sequence');
const shell = require('gulp-shell');

const paths = {
  js: ['./*.js'],
  destination: './app',
  spec: 'app/spec',
  scripts: 'app/scripts',
  tmp: 'tmp',
  zipSource: ['./app/**/*', './node_modules/**/*'],
};

gulp.task('run_index', shell.task([
  'node index.js',
]));

gulp.task('lint', () => {
  return gulp.src(paths.js)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('default', () => {
  run('run_index', 'lint');
});
