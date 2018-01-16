const gulp = require("gulp");
const pump = require("pump");
const runSequence = require("run-sequence");
const del = require("del");
const $ = require("gulp-load-plugins")();

gulp.task("css", () => {
	pump([
		// get all scss files
		gulp.src("ios7.scss"),
		// make a sourcemap
		$.sourcemaps.init(),
		// run it through sass
		$.sass.sync({
			includePaths: [ "bower_components" ]
		}),
		// add prefixes as needed
		$.autoprefixer(),
		// make it ugly
		$.cleanCss(),
		// add minified suffix
		$.rename({
			suffix: ".min"
		}),
		// write the sourcemaps
		$.sourcemaps.write("."),
		// write the file
		gulp.dest(".")
	]);
});

gulp.task("js", () => {
	pump([
		// get all scss files
		gulp.src([
			"bower_components/fastclick/lib/fastclick.js",
			"ios7.js"
		]),
		// concat to one file
		$.concat("ios7.min.js"),
		// make a sourcemap
		$.sourcemaps.init(),
		// make it ugly
		$.uglify({
			output: {
				comments: /^!|@preserve|@license/
			}
		}),
		// write the sourcemaps
		$.sourcemaps.write("."),
		// write the file
		gulp.dest(".")
	]);
});

gulp.task("clean", () => {
	del([
		"ios7.min.css",
		"ios7.min.css.map",
		"ios7.min.js",
		"ios7.min.js.map"
	]);
});

gulp.task("default", (callback) => {
	runSequence("clean", [ "css", "js" ], callback);
});
