/**
 * grunt/pipeline.js
 *
 * The order in which your css, javascript, and template files should be
 * compiled and linked from your views and static HTML files.
 *
 * (Note that you can take advantage of Grunt-style wildcard/glob/splat expressions
 * for matching multiple files.)
 */


// CSS files to inject in order
//
// (if you're using LESS with the built-in default config, you'll want
//  to change `styles/importer.less` instead.)
var cssFilesToInject = [
    'styles/bootstrap.css',
    'styles/font-awesome.css',
    'styles/normalize.css',
    'styles/theme.css',
    'styles/lsb.css',
    'styles/**/*.css'
];


// Client-side javascript files to inject in order
// (uses Grunt-style wildcard/glob/splat expressions)
var jsFilesToInject = [
    'scripts/jquery.js',
    'scripts/bootstrap.js',
    'scripts/modernizr.js',
    'scripts/theme.js',
    'scripts/lsb.js',
    'scripts/**/*.js'
];


// Prefix relative paths to source files so they point to the proper locations
// (i.e. where the other Grunt tasks spit them out, or in some cases, where
// they reside in the first place)
module.exports.cssFilesToInject = cssFilesToInject.map(function(path) {
    return 'public/' + path;
});
module.exports.jsFilesToInject = jsFilesToInject.map(function(path) {
    return 'public/' + path;
});
