const gulp = require('gulp');
const gulpSftp = require('gulp-sftp');
const del = require('del');

const host = '47.75.157.180'
const port = 22;
const user = 'root';
const pass = 'Pj-199511';

gulp.task('cleanDist', function (cb) {
  del([
    './dist/**',
  ], cb);
});

gulp.task('copyFile', () => {
  gulp.src(['./app.js', './package.json', './package-lock.json'])
    .pipe(gulp.dest('./dist'))
})

gulp.task('copyDir', () => {
  gulp.src(['./router/**'])
    .pipe(gulp.dest('./dist/router'))
})

gulp.task('release', function () {
  return gulp.src(['./dist/**'])
    .pipe(gulpSftp({
      host,
      port,
      user,
      pass,
      remotePath: '/var/www/cnodeNewApi/'
    }))
})

gulp.task('default', ['cleanDist', 'copyFile', 'copyDir']);
