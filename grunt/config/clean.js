/**
 * Clean files and folders.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-clean
 */
module.exports = function(grunt) {
	grunt.config.set('clean', {
		dev: [
            'public/*',
        ],
		prod: [
            'public/scripts/*',
            '!public/scripts/lsb.min.js',

            'public/styles/*',
            '!public/styles/lsb.min.css'
        ]
	});

	grunt.loadNpmTasks('grunt-contrib-clean');
};
