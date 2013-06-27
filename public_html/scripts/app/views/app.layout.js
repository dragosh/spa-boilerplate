/* globals Marionette */
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
    initialize: function(options) {
      this.render();
      this.menu.show(new Views.Menu());
      $(options.el).prepend(this.el);
    }
  });

  return Layout;
});
