/* globals Marionette */
/*
|--------------------------------------------------------------------------
| App routes & Controller
*/
define([
  'app', //App
  'controllers/app.controller'
],
function(App,Controller) {
  'use strict';
  //App Router
  var Router = Marionette.AppRouter.extend({

    controller: new Controller(),

    appRoutes: {
      'items': 'items'
    },
    routes: {
      'another-route': 'anotherRoute'
    },
    anotherRoute: function() {
      console.log('Another Route');
    }
  });
  return Router;
});
