require.config({
	deps: ['main'],
	paths: {
		// Libraries
		jquery       : '../components/jquery/jquery',
		backbone     : '../components/backbone/backbone',
		underscore   : '../components/underscore/underscore',
		handlebars   : '../components/handlebars/handlebars',
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

