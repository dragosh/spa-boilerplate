/* globals Marionette */
/*
|--------------------------------------------------------------------------
| App layout
| Create the app layout  regions here
*/

define([
  'app', //app,
  'views/sample.views' //Layout
],
function(App,Views) {

  'use strict';

  var Layout = Marionette.Layout.extend({
    template: App.templates.AppLayout,
    regions: {
      menu: '#menu',
      content: '#content'
    },
    serializeData: function(){
      return {
        name: 'Single Page Application - Boilerplate'
      };
    },
    initialize: function(options) {
      this.render();
      this.menu.show(new Views.Menu());
      this.content.show(new Views.Content());
      $(options.el).prepend(this.el);
    }
  });

  return Layout;
});
