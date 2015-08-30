module.exports = function(grunt) {
	grunt.initConfig({
		bower: {
			install: {}
		},

		pleeease: {
			custom: {
				options: {
					in: [ "ios7.css" ],
					out: "ios7.min.css",

					autoprefixer: {
						browsers: [ "last 3 versions" ]
					},

					sourcemaps: {
						map: {
							inline: false
						}
					}
				}
			}
		},
	});

	grunt.loadNpmTasks("grunt-bower-task");
	grunt.loadNpmTasks("grunt-pleeease");

	grunt.registerTask("default", [ "bower:install", "pleeease" ]);
	grunt.registerTask("install", [ "bower:install" ]);
};
