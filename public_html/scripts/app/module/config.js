define([
	"app",
	"backbone"
],

function(app, Backbone) {

/*
|--------------------------------------------------------------------------
| Extend the global Config
*/
	var ModuleConfig = {
        module_prop: "foo"
    };

	return _.extend(Config || {} , ModuleConfig);

});