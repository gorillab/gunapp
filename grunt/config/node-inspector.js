module.exports = function(grunt) {
    grunt.config.set('node-inspector', {
        dev: {
            options: {
                'web-port': 1337,
                'web-host': 'localhost',
                'debug-port': 5857,
                'save-live-edit': true,
                'no-preload': true,
                'stack-trace-limit': 50,
                'hidden': ['node_modules']
            }
        }
    });

    grunt.loadNpmTasks('grunt-node-inspector');
};
