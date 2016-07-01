module.exports = function(grunt) {
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ['es2015']
            },
            dist: {
                files: [
                {
                    expand: true,
                    cwd: 'source/',
                    src: ['**/*.js'],
                    dest: 'build/',
                    ext: '.js',
                }
            ]
            }
        }
    });

    require('load-grunt-tasks')(grunt); 
};
