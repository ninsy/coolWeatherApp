var gulp = require("gulp");
var sass = require("gulp-sass");
var babel = require("gulp-babel");
var concat = require("gulp-concat");


gulp.task("compileSass", function() {
	return gulp.src("scss/main.scss")
		.pipe(sass())
		.pipe(gulp.dest("dist"));
})

gulp.task("transpileEs2015" ,function() {
	return gulp.src("scripts/app.js")
		.pipe(babel())
		.pipe(gulp.dest("dist"))
})

gulp.task("watchFiles", function() {
	gulp.watch("scss/*.scss", ["compileSass"]);
	gulp.watch("scripts/*.js", ["transpileEs2015"]);
})


gulp.task("serve", ["watchFiles"]);