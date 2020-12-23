"use strict";
const gulp = require("gulp");
const sass = require("gulp-sass");
const minifyCSS = require("gulp-clean-css");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync");

//Compile SCSS to CSS

gulp.task("sass", function () {
  return gulp
    .src("sass/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(minifyCSS())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
});

//Browser Sync

gulp.task("browser-sync", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });

  gulp.watch("./sass/**/*.scss", gulp.series("sass"));
  gulp.watch(["./*.html", "./**/*.js"]).on("change", browserSync.reload);
});

//Default Tasks

gulp.task("default", gulp.series("browser-sync"));
