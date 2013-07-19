define(function(require){
  'use strict';
  return {
    // Layout/Region templates
    AppLayout: require('tpl!layout'),
    MenuTemplate: require('tpl!partials/menu'),
    HomeTemplate: require('tpl!home')
  };
});
