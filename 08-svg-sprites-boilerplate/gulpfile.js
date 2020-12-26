var gulp = require("gulp");
var svgSprite = require("gulp-svg-sprite");

var confifg = {
  mode: {
    symbol: {
      dest: "sprite",
      sprite: "sprite.svg",
      example: true,
    },
    svg: {
      xmlDeclaration: false,
      docTypeDeclaration: false,
    },
  },
};

gulp.task("sprites", function () {
  return gulp
    .src("icons/**/*.svg")
    .pipe(svgSprite(confifg))
    .pipe(gulp.dest("."));
});
