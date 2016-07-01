module.exports = function(grunt) {
    grunt.config.set('run', {
        dev: {
            exec: 'npm start'
        },
        prod: {
            exec: 'npm start'
        }
    });

    grunt.loadNpmTasks('grunt-run');
};
