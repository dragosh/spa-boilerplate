define([
	'app',
	'backbone'
],

function(app, Backbone) {
    'use strict';
/*
|--------------------------------------------------------------------------
| Extend the global Config
*/
	var ModuleConfig = {
        moduleProp: 'foo'
    };

	return _.extend(app.config || {} , ModuleConfig);

});
