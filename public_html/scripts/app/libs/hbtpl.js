define(['handlebars'], function(Handlebars) {
  'use strict';

  var buildMap = {};
  return {
    load: function (name, parentRequire, onload, config) {
      var tplExt = (config.ext && config.tpl.ext) || '.html',
        tplPath = (config.tpl && config.tpl.path) || '';


      if (config.isBuild) {
        var fsPath = config.dirBaseUrl + tplPath + name + tplExt;
        buildMap[name] = nodeRequire('fs').readFileSync(fsPath).toString();
        onload();
      } else {
        var JST = window.JST ? window.JST : {},
            path = tplPath + name + tplExt;
        if (JST[path]) {
          // Grunt.js pre-compiles templates into JST[]
          onload(Handlebars.template(JST[template]));
        } else {
          // use text.js plugin when loading templates during development
          parentRequire(['text!' + path ], function(raw) {
            onload(Handlebars.compile(raw));
          });
        }
      }
    }
  };
});
