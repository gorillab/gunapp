/**
 * Copy files and folders.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {
	grunt.config.set('copy', {
		all: {
            // client
            files: [{
				expand: true,
				cwd: './client',
				src: ['**/*.!(coffee)'],
				dest: 'public'
        	},
            // vendors
            {
                expand: true,
                cwd: './bower_components',
                src: [
                    
                ],
                flatten: true,
                dest: 'public/scripts'
            },
            // styles
            {
        		expand: true,
                cwd: './bower_components',
                src: [
                    
                ],
                flatten: true,
                dest: 'public/styles'
        	},
            // fonts
            {
        		expand: true,
                cwd: './bower_components',
                src: [
                  'font-awesome/fonts/*'
                ],
                flatten: true,
                dest: 'public/fonts'
        	}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
