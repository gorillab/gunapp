/**
 * Autoinsert script tags (or other filebased tags) in an html file.
 *
 * For usage docs see:
 * 		https://github.com/Zolmeister/grunt-sails-linker
 */
module.exports = function(grunt) {
	grunt.config.set('sails-linker', {
		devJs: {
			
		},
		prodJs: {
			
		},

		devStyles: {
			
		},
		prodStyles: {
			
		}
	});

	grunt.loadNpmTasks('grunt-sails-linker');
};
