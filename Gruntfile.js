module.exports = function(grunt) {
	grunt.initConfig({
		bower: {
			install: {}
		},

		pleeease: {
			custom: {
				options: {
					browsers: [ "last 3 versions" ],
					sass: true,

					sourcemaps: {
						map: {
							inline: false
						}
					}
				},

				files: {
					"ios7.min.css": "ios7.scss"
				}
			}
		},
	});

	grunt.loadNpmTasks("grunt-bower-task");
	grunt.loadNpmTasks("grunt-pleeease");

	grunt.registerTask("default", [ "bower:install", "pleeease" ]);
	grunt.registerTask("install", [ "bower:install" ]);
};
