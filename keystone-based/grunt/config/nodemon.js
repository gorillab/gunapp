module.exports = function(grunt) {
    grunt.config.set('nodemon', {
        dev: {
            script: 'build/keystone',
            options: {
                args: [],
                watch: ['server'],
                ignore: ['node_modules/**'],
                ext: 'js, jade',
                nodeArgs: ['--debug'],
                delayTime: 1,
                cwd: './'
            }
        },
        prod: {
            script: 'build/keystone',
            options: {
                delayTime: 1,
                cwd: './'
            }
        }
    });

    grunt.loadNpmTasks('grunt-nodemon');
};
