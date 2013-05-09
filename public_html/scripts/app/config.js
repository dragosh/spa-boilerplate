// Set the require.js configuration for the application.
'use strict';

// create a config  object to share with the tests specs
var rjsConfig = (function() {

	var  baseHost =  'http://localhost:9000/scripts/';

	return {

		paths: {
			src : baseHost + 'app/',
			// Bower directory
			libs: baseHost + 'components',
			// Libraries
			jquery       : baseHost + 'components/jquery/jquery',
			backbone     : baseHost + 'components/backbone/backbone',
			underscore   : baseHost + 'components/underscore/underscore',
			handlebars   : baseHost + 'components/handlebars/handlebars',
			layoutmanager: baseHost + 'components/layoutmanager/backbone.layoutmanager'

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
	};
})();

if( typeof require === 'function') {
	//add the main dependencies.
	rjsConfig.deps = ['main'];
	require.config(rjsConfig);
}
