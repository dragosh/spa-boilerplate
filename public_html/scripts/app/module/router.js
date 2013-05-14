define([
    'app',
    'module/models',
    'module/views'
],
function(app, Models, Views) {

    'use strict';

    var Router = Backbone.Router.extend({

        routes: {
            '': 'index',
            'sample-route': 'sample', // sample
            '*other': 'index' // 404 page
        },

        initialize: function(bootstrap) {
            console.log(bootstrap);
        },
        index: function() {

        },
        sample: function() {
            //console.log(app);
            app.trigger('domchange:title', 'New page title');
        }

    });

    return Router;

});
