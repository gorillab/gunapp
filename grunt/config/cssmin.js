/**
 * Compress CSS files.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = function(grunt) {
	grunt.config.set('cssmin', {
        options: {
            keepSpecialComments: 0
        },
		styles: {
			files: {
                'public/styles/gunapp.min.css': 'public/styles/gunapp.concat.css'
            }
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');
};
