require([
  'app', //App
  'routes' //Router
],
function(App,routes) {
  'use strict';
  var options = {
    data: [],
    routes: routes
  };

  App.start(options);
});
