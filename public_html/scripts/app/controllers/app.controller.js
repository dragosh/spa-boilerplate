/* globals Marionette */
define([
  'app',
  'views/app.layout' //Layout
  //'../models/sample.models', //Layout
],
function(App, AppLayout,Views) {

  'use strict';

  App.layout = new AppLayout({el:'#main'});

  var Controller = Marionette.Controller.extend({

    initialize: function(options) {
      console.log(this);
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
