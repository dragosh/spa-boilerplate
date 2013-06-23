/* globals Marionette */
define([
  'app',
  'views/app.layout', //Layout
],
function(App,AppLayout) {

  'use strict';

  App.layout = new AppLayout();

  var Controller = Marionette.Controller.extend({
    initialize: function(options) {
      App.layout.render();
      $('body').prepend(App.layout.el);
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
