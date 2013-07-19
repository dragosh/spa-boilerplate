/* globals Marionette */
/*
|--------------------------------------------------------------------------
| Main App Controller
*/

define([
  'app',
  'views/app.layout' //Layout
],
function(App, AppLayout) {

  'use strict';

  App.layout = new AppLayout({el:'#main'});

  var Controller = Marionette.Controller.extend({

    initialize: function(options) {
      this.stuff = options.stuff;
    },
    items: function() {

    },
    doStuff: function(){
      this.trigger('stuff:done', this.stuff);
    }
  });

  return Controller;
});
