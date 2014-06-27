var gulp          = require('gulp');
var path          = require('path');
var clean         = require('gulp-clean');
var concat        = require('gulp-concat-sourcemap');
var gzip          = require('gulp-gzip');
var uglify        = require('gulp-uglify');
var NGMin         = require('gulp-ng-annotate');
var streamFilter  = require('gulp-filter');
var rename        = require('gulp-rename');
var ris           = require('run-sequence');
var debug         = require('gulp-debug');
var footer        = require('gulp-footer');

gulp.task('server', function () {
  connect.server( {
    port : 8000
  });
});

gulp.task('default',function(cb){
  ris('clean',
      'concat',
      'uglify',cb);
});

gulp.task('clean',function() {
  return gulp.src( ['angular.*'] )
    .pipe( clean( {read : false} ) );
});

var concatName = 'angular-all.js';
var minName    = 'angular-all.min.js';
var mapName    = 'angular-all.min.js.map';

gulp.task('concat',function(cb) {
  //var filter = streamFilter( concatName );

  gulp.src([
      './webclient/js/framework/angular.js',  // Forces angular to be first
      './webclient/js/framework/*.js'         // Reset of the framework ( above will be de-duped )
    ])
    .pipe( NGMin( {remove : true, add : true, single_quotes : true} ) )
    .pipe( concat( concatName, {sourcesContent : true, mapName : mapName} ) )
    .pipe( gulp.dest( '.' ) )
    .pipe( gzip( {gzipOptions : { level : 9}} ) )
    .pipe( gulp.dest( '.' ) )
});

gulp.task('uglify',function(cb) {
    gulp.src(concatName)
      .pipe(rename(minName))
      .pipe(uglify())
      .pipe(footer('//# sourceMappingURL='+mapName))
      .pipe(gulp.dest('.'))
      .pipe(gzip({gzipOptions : { level : 9}}))
      .pipe(gulp.dest('.'));
});

