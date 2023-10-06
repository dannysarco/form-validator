const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");

gulp.task("minify", function () {
  return gulp
    .src("src/*.html")
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        removeComments: true,
        removeAttributeQuotes: true,
        removeEmptyAttributes: true,
        // Use this option to remove `data-cy` attributes:
        removeAttribute: "data-cy",
      })
    )
    .pipe(gulp.dest("dist"));
});
