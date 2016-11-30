const gulp = require("gulp");
const runSequence = require("run-sequence");
const del = require("del");
const $ = require("gulp-load-plugins")();

gulp.task("css", () => {
	return gulp
		// get all scss files
		.src("ios7.scss")
		// make a sourcemap
		.pipe($.sourcemaps.init())
		// run it through sass
		.pipe($.sass.sync({
			includePaths: [ "bower_components" ]
		}).on("error", $.sass.logError))
		// add prefixes as needed
		.pipe($.autoprefixer())
		// make it ugly
		.pipe($.cleanCss())
		// add minified suffix
		.pipe($.rename({
			suffix: ".min"
		}))
		// write the sourcemaps
		.pipe($.sourcemaps.write("."))
		// write the file
		.pipe(gulp.dest("."))
});

gulp.task("clean", () => {
	del("ios7.min.css");
});

gulp.task("default", (callback) => {
	runSequence("clean", "css", callback);
});
