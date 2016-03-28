var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

var ghPages = require('gulp-gh-pages');

//Mensaje de error en terminal
var beep = require('beepbeep');
var colors = require('colors');

var onError = function(err) {
  beep([200, 200]);
  console.log(
    '\n\n****************************************************\n'.bold.gray +
    '*****************'.bold.gray + ' \(╯°□°)╯'.bold.red + ' ︵ '.bold.gray +'ɹoɹɹǝ '.bold.blue + '*****************'.bold.gray +
    '\n****************************************************\n\n'.bold.gray +
    String(err) +
    '\n\n*******************************************************\n\n'.bold.gray );
  this.emit('end');
};

//Convertir el SCSS a CSS
gulp.task('css',function() {
	return gulp.src('./src/scss/main.scss')
	.pipe(plumber({
		erorHandler: onError
	}))
	.pipe(sass())
	.pipe(autoprefixer({
		browsers: [
			'last 2 versions',
			'> 1%'
		]
	}))
	.pipe(gulp.dest('./dist/css'));
});

//Copiar el HTML de SRC a DIST
gulp.task('html', function() {
    return gulp.src('./src/*.html')
    .pipe(gulp.dest('./dist'));
});

//Copiar el JS de SRC a DIST
gulp.task('js', function() {
    return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('./dist/js'));
});

//Copiar las IMG de SRC a DIST
gulp.task('imagemin', function() {
    return gulp.src('./src/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
    .pipe(gulp.dest('./dist/img'));
});

//deploy
gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

//Tarea por defecto GULP que muestra los cambios en tiempo real
gulp.task('default', ['css','html','js','imagemin'], function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        files: ['./dist/css/main.css']
    });
    gulp.watch('./src/scss/**/*.scss', ['css']);
    gulp.watch('./src/img/*', ['imagemin']);
    gulp.watch('./src/js/*.js', ['js']);
    gulp.watch('./src/*.html', ['html']);
    gulp.watch('./dist/*.html').on('change',browserSync.reload);
});

// cortar proceso ctrl+C