// Set the require.js configuration for your application.
require.config({

	//baseUrl: '',
	// Initialize the application with the main application file
	deps: ['main'],
	paths: {
		// Bower directory
		libs: '../components',
		// Libraries
		jquery: '../components/jquery/jquery',
		backbone: '../components/backbone/backbone',
		underscore: '../components/underscore/underscore',
		handlebars: '../components/handlebars/handlebars',
		layoutmanager: '../components/layoutmanager/backbone.layoutmanager'

	},

	shim: {
		backbone: {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},

		underscore: {
			exports: '_'
		},

		handlebars: {
			exports: 'Handlebars'
		},
		layoutmanager: {
			deps: ['backbone', 'jquery']
		}
	},
	map: {

	}

});
