require.config({
	deps: ['main'],
	paths: {
		// Libraries
		jquery    : '../components/jquery/jquery',
		backbone  : '../components/backbone/backbone',
		underscore: '../components/underscore/underscore',
		handlebars: '../components/handlebars/handlebars',
		text       : '../components/requirejs-text/text',
		tpl       : '../components/requirejs-handlebars/hb',
		marionette: '../components/backbone.marionette/lib/backbone.marionette',

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
		marionette: {
			deps: ['backbone', 'underscore', 'jquery'],
			exports: 'Marionette'
		}
	},
	tpl: {
		path : '/templates/'
	},
	map: {

	}
});

