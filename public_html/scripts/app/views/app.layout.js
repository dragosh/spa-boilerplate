/* globals Marionette */
define([
  'app', //app
  'tpl!layout.html'

],
function(App,layoutTpl) {

  'use strict';

  var Layout = Marionette.Layout.extend({

    template: layoutTpl,

    regions: {
      menu: '#menu',
      content: '#content'
    }
  });

  return Layout;
});
