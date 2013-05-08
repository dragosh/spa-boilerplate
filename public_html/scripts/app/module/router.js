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
            '*other': 'index' // 404 page
        },

        initialize: function() {

        },
        index: function() {
            alert('index');
        }

    });

    return Router;

});
