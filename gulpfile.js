const gulp = require("gulp");
const del = require("del");
const autoprefixer = require("gulp-autoprefixer");
const cleanCss = require("gulp-clean-css");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");

gulp.task("css", () => gulp
	// get all scss files
	.src("ios7.scss")
	// make a sourcemap
	.pipe(sourcemaps.init())
	// run it through sass
	.pipe(sass.sync({
		includePaths: [ "node_modules" ]
	}))
	// add prefixes as needed
	.pipe(autoprefixer())
	// make it ugly
	.pipe(cleanCss())
	// add minified suffix
	.pipe(rename({ suffix: ".min" }))
	// write the sourcemaps
	.pipe(sourcemaps.write("."))
	// write the file
	.pipe(gulp.dest("."))
);

gulp.task("js", () => gulp
	// get all js files
	.src([
		"node_modules/fastclick/lib/fastclick.js",
		"ios7.js"
	])
	// concat to one file
	.pipe(concat("ios7.min.js"))
	// make a sourcemap
	.pipe(sourcemaps.init())
	// make it ugly
	.pipe(uglify({
		output: {
			comments: /^!|@preserve|@license/
		}
	}))
	// write the sourcemaps
	.pipe(sourcemaps.write("."))
	// write the file
	.pipe(gulp.dest("."))
);

gulp.task("clean", () => del([
	"ios7.min.css",
	"ios7.min.css.map",
	"ios7.min.js",
	"ios7.min.js.map"
]));

gulp.task("default", gulp.series([ "clean", gulp.parallel([ "css", "js" ]) ]));
