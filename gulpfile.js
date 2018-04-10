var gulp = require('gulp'), // Подключаем Gulp
  sass = require('gulp-sass'); // Подключаем Sass пакет

gulp.task('sass', function() { // Создаем task 'sass'
  return gulp.src(['sass/**/*.sass', 'sass/**/*.scss']) // Берем источник
  .pipe(sass({outputStyle: 'expended'}).on('error', sass.logError)) // Преобразуем Sass в Css
  .pipe(gulp.dest('css')); // Выгружаем результат в папку css
});

gulp.task('watch', function() {
  gulp.watch(['sass/**/*.sass', 'sass/**/*.scss'], ['sass']); // Наблюдение за sass файлами в папке sass
});

gulp.task('default', ['watch']);
