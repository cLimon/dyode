const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
// const runSequence = require('run-sequence');
// const runSequence = require('gulp4-run-sequence');




gulp.task('sass', function() {
  return gulp.src('dev/scss/**/*.scss')
    .pipe(sass())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('dist/css'))
})


gulp.task('watch', function(){
  gulp.watch('dev/scss/**/*.scss', gulp.series(['sass']));
  // Other watchers
})

gulp.task('copyHtml', function () {
  return gulp.src('dev/index.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('javascript', function() {
  return gulp.src('dev/js/**/*')
  .pipe(gulp.dest('dist/js'))
})


// gulp.task('scripts', function() {
//   return gulp.src([
//   'dev/js/**/!(scripts)*.js',
//   'dev/js//scripts.js',
// ])
//     .pipe(concat('scripts.js'))
//     .pipe(gulp.dest('dist/js'))
//     .pipe(rename('scripts.min.js'))
//     .pipe(uglify())
//     .pipe(gulp.dest('dist/js'));
// });




gulp.task('fonts', function() {
  return gulp.src('dev/fonts/**/*')
   .pipe(gulp.dest('dist/fonts'))
})


gulp.task('images', function(){
  return gulp.src('dev/images/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe(cache(imagemin()))
    .pipe(gulp.dest('dist/images'))
});


gulp.task('build', gulp.series('sass', 'images', 'fonts', 'javascript', 'copyHtml'));
