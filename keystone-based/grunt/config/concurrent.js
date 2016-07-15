module.exports = function(grunt) {
    grunt.config.set('concurrent', {
        dev: {
            tasks: ['run:dev', 'node-inspector', 'watch'],
            options: {
                logConcurrentOutput: true
            }
        },
        prod: {
            tasks: ['nodemon:prod'],
            options: {
                logConcurrentOutput: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-concurrent');
};
