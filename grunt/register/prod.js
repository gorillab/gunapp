module.exports = function (grunt) {
	grunt.registerTask('prod', [
		'compileAssets',
		'concat',
		'uglify',
		'cssmin',
        'clean:prod',
		'sails-linker:prodJs',
		'sails-linker:prodStyles'
	]);
};
