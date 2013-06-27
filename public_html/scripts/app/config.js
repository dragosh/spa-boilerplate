require.config({
	deps: ['main'],

	paths: {
		// Libraries
		//
		jquery    : '../components/jquery/jquery',
		backbone  : '../components/backbone/backbone',
		underscore: '../components/underscore/underscore',
		handlebars: '../components/handlebars/handlebars',
		marionette: '../components/backbone.marionette/lib/backbone.marionette',
		tpl       : 'libs/hbtpl',
		text      : '/scripts/components/requirejs-text/text', // use abspath for build r.js (todo)

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
		deps: ['text', 'handlebars'],
		path : '../../templates/',
		ext : '.html'
	},
	map: {

	}
});

