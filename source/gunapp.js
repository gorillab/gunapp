// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
var dotenv = require('dotenv');

try {
	dotenv.load();
} catch (err) {
	// this space intentionally left blank
}

// Require keystone
var keystone = require('keystone');
import componentRoutes from 'routes/component-routes';

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.

keystone.init({

	'name': 'gunapp',
	'brand': 'gunapp',

	'less': '../public',
	'static': '../public',
	'favicon': '../public/favicon.ico',
	'views': 'templates/views',
	'view engine': 'jade',
	'react routes': componentRoutes,

	'auto update': true,
	'session': true,
	'auth': true,
	'user model': 'User'

});

// Load your project's Models

keystone.import('models');

// Setup common locals for your templates. The following are required for the
// bundled templates and layouts. Any runtime locals (that should be set uniquely
// for each request) should be added to ./routes/middleware.js

keystone.set('locals', {
	_: require('underscore'),
	env: keystone.get('env'),
	utils: keystone.utils,
	editable: keystone.content.editable
});

// Load your project's Routes

keystone.set('routes', require('./routes'));

// Configure the navigation bar in Keystone's Admin UI

keystone.set('nav', {
	'posts': ['posts', 'post-categories'],
	'teams': 'teams',
	'users': 'users'
});

// Start Keystone to connect to your database and initialise the web server

keystone.start();

export default keystone;
