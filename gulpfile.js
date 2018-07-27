//导入所需插件
var gulp = require("gulp");
var sass = require("gulp-sass");
var cssnano = require("gulp-cssnano");
var rename = require("gulp-rename");

//发布任务
gulp.task("sass", function(){
	gulp.src("./src/sass/*.scss").pipe(sass()).pipe(rename({"suffix":".min"}))
	//.pipe(cssnano())
	.pipe(gulp.dest("./dist"));
})
gulp.task("default", function(){
	gulp.watch(["./src/sass/*.scss"],["sass"]);
})
