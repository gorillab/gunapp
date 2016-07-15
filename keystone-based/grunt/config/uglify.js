/**
 * Minify files with UglifyJS.
 *
 * For usage docs see:
 *      https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = function(grunt) {
    grunt.config.set('uglify', {
        options: {
            preserveComments: false
        },
        scripts: {
            files: {
                'public/scripts/gunapp.min.js': 'public/scripts/gunapp.concat.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
};
