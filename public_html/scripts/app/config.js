// Set the require.js configuration for your application.
'use strict';

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
	rjsConfig.deps = ['main'];
	require.config(rjsConfig);
}
