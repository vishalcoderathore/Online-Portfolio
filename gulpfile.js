const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

//Compile Sass & Inject Into Browser
gulp.task('sass', function(){
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
  .pipe(sass())
  .pipe(gulp.dest("src/styles/css"))
  .pipe(browserSync.stream());
});

//Move JS Files to src/js
gulp.task('js', function(){
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/jquery/dist/jquery.min.js', 'node_modules/popper.js/dist/umd/popper.min.js', 'node_modules/aos/dist/aos.js'])
  .pipe(gulp.dest("public/js"))
  .pipe(browserSync.stream());
});

// Watch Sass & Server
// gulp.task('serve', ['sass'], function(){
//   browserSync.init({
//     server : "./src"
//   });
// });

// gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'], ['sass']);
// gulp.watch("src/*.html").on('change', browserSync.reload);

// Move Fonts Folder to src
gulp.task('fonts', function(){
  return gulp.src('node_modules/font-awesome/fonts/*')
  .pipe(gulp.dest("src/styles/fonts"));
});

// Move Font Awesome CSS to src/css
gulp.task('fa', function(){
  return gulp.src(['node_modules/font-awesome/css/font-awesome.min.css', 'node_modules/aos/dist/aos.css'])
  .pipe(gulp.dest("src/styles/css"))
  .pipe(browserSync.stream());;
});

gulp.task('default', ['js', 'sass', 'fa', 'fonts']);
