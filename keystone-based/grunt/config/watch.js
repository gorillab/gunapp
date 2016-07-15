/**
 * Run predefined tasks whenever watched file patterns are added, changed or deleted.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = function(grunt) {
	grunt.config.set('watch', {
		client: {
			files: ['client/**/*'],
			tasks: ['sync:client', 'linkAssets']
		},
        source: {
            files: ['source/**/*'],
            tasks: ['run:dev']
        },
        pipeline: {
            files: ['grunt/config/sails-linker.js', 'grunt/pipeline.js'],
            tasks: ['linkAssets']
        },
        copy: {
            files: ['grunt/config/copy.js'],
            tasks: ['compileAssets', 'linkAssets']
        }
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
};
