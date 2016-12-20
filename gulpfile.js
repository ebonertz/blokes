var gulp = require('gulp');

const paths = {
  js: ['./src/**/*.js'],
  destination: './app',
  spec: 'app/spec',
  scripts: 'app/scripts',
  tmp: 'tmp',
  zipSource: ['./app/**/*', './node_modules/**/*'],
};

gulp.task('run_index', function() {
  run('node index.js');
});

gulp.task('default', function() {
  run('run_index');
});
