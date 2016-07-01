/**
 * Concatenate files.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = function(grunt) {
	grunt.config.set('concat', {
		js: {
			src: require('../pipeline').jsFilesToInject,
			dest: 'public/scripts/gunapp.concat.js'
		},
		css: {
			src: require('../pipeline').cssFilesToInject,
			dest: 'public/styles/gunapp.concat.css'
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
};
