/* globals Marionette */
define([
  'app', //app
],
function(App) {
  'use strict';

  var Views = {};

  Views.Menu = Marionette.ItemView.extend({
    template: App.templates.MenuTemplate,
    serializeData: function(){
      return {};
    }
  });

  Views.Content = Marionette.ItemView.extend({
    template: App.templates.HomeTemplate,
    serializeData: function(){
      return {
        test: 'some value'
      };
    }
  });
  return Views;
});
