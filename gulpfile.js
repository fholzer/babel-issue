var gulp = require("gulp");
var babel = require("gulp-babel");

gulp.task("default", function() {
  return gulp.src("src/*.js")
//    .pipe(sourcemaps.init())
    .pipe(babel())
//    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});
