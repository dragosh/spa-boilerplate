/* globals Marionette */
define([
  'app', //app
],
function(App) {

  'use strict';
  var Views = {};
  Views.Menu = Marionette.ItemView.extend({
    template: App.templates.ModuleTemplate,
    serializeData: function(){
      return {
        'test': 'some value'
      };
    }
  });
  return Views;
});
