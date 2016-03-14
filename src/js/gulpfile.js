var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('css',function(){
	return gulp.src('src/scss/main.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: [
				'last 2 versions',
				'> 1%'
			]
		}))
	.pipe(gulp.dest('dist/css'));
});

gulp.task('default', ['css'], function(){
	gulp.watch('src/scss/**/*.scss', ['css']);
});