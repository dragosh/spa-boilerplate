/* globals Marionette */
define([
  'app',
  'views/app.layout', //Layout
  'models/sample.models', //Layout
  'views/sample.views' //Layout
],
function(App, AppLayout, Models, Views) {

  'use strict';

  App.layout = new AppLayout();

  var Controller = Marionette.Controller.extend({

    initialize: function(options) {
      App.layout.render();
      $('#main').prepend(App.layout.el);
      this.stuff = options.stuff;
    },

    sampleRoute: function() {


    },
    doStuff: function(){
      this.trigger('stuff:done', this.stuff);
    }
  });
  return Controller;
});
