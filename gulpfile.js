import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass")); // const autoprefixer = require("gulp-autoprefixer");
const rtlcss = require("gulp-rtlcss");
const concat = require("gulp-concat");

// Define the task to convert compiled CSS to RTL
gulp.task("convert-rtl", async function () {
  return (
    gulp
      .src("./src/assets/styles/*.scss") // Assuming compiled CSS is in this directory
      // .pipe(sass().on("error", sass.logError))
      .pipe(sass())
      .pipe(rtlcss()) // Convert to RTL
      .pipe(concat("main-rtl.scss"))
      .pipe(gulp.dest("./src/assets/rtl"))
  ); // Output directory for RTL CSS
});