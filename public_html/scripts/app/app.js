define([
  'marionette', //BB Marionete
  'templates'
],
function (Marionette, Templates) {
  'use strict';
  //Create the App
  var App = new Marionette.Application({
    root: '/',
    templates: Templates
  });

  // ADD Initializer
  App.addInitializer( function(options) {

    //Start The Router And handle the app links
    if(Backbone.history && typeof options.routes === 'function') {
      options.root = options.root || '/';
      //Start the router
      new options.routes();
      Backbone.history.start();
      //Navigate within the app only on a non external a 'data-attr'
      $(document.body).on('click','a:not([data-external])', function(ev) {
        //Get the absolute anchor href.
        var href = { prop: $(ev.currentTarget).prop('href'), attr: $(ev.currentTarget).attr('href') };
        // Get the absolute root.
        var root = location.protocol + '//' + location.host + options.root;
        // Ensure the root is part of the anchor href, meaning it's relative.
        if(href.prop.slice(0, root.length) === root) {
          // If the href exists and is a empty hash exit;
          if(href.attr === '#') {
            return false;
          }
          ev.preventDefault();
          href = (Backbone.history.options.pushState === true) ? href.attr : options.root + href.attr;
          Backbone.history.navigate(href,  true);
        }
      });
    } else {
      //throw a error or warning
      //Backbone.history not found
      //throw new Error("No Router Found");
    }
  });

  // ADD Before Initialize
  App.on('initialize:before', function() {


  });

  // ADD After Initialize
  App.on('initialize:after', function() {


  });

  return App;
});
