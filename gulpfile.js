var gulp          = require('gulp'); 
var path          = require('path');
var clean         = require('gulp-clean');
var concat        = require('gulp-concat-sourcemapped');
var sourceMapper  = require('gulp-sourcemapped');
var gzip          = require('gulp-zopfli');
var uglify        = require('gulp-uglify');
var ris           = require('run-sequence');
var debug         = require('gulp-debug');

gulp.task('server', function () {
  connect.server( {
    port : 8000
  });
});

gulp.task('default',function(done){
  ris('clean',
      'build',done);
});

gulp.task('clean',function() {
  return gulp.src( ['angular-all.*'] )
    .pipe(clean({read : false}));
});

var minName = 'angular-all.min.js';

gulp.task('build',function() {
  return  gulp.src([
      './source/angular.js', // Forces angular to be first
      './source/*.js'        // Reset of the framework ( above will be de-duped )
     ])
    .pipe(sourceMapper.create(-1))
      .pipe( concat(minName) )
      .pipe(uglify({
        output: {
          ascii_only: true
        }
      }))
    .pipe(sourceMapper.write({
      sourceRoot     : "//ajax.googleapis.com/ajax/libs/angularjs/1.2.19/"
    }))
    .pipe( gulp.dest( '.' ) )
    .pipe( gzip(  ) )
    .pipe( gulp.dest( '.' ) );
});

//{gzipOptions : { level : 9}}


