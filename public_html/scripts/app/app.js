define([
    'handlebars', // template engine
    'helpers/handlebars_helper', // template engine helpers
    'layoutmanager', // backbone view manager plugin

    //'async/facebook!', // async facebook
    //'async/twitter!' //async twitter

],
function(Handlebars) {

    'use strict';
/*
|--------------------------------------------------------------------------
|   Create the Main app Object Here
|--------------------------------------------------------------------------
*/

    var app = {

        root: '/',
        config:{},//Default Configuration
        dom: {}, //DOM elements
        eventBus: _.extend({}, Backbone.Events), //Event Bus

        onDomChangeTitle: function (title) {
            $(document).attr('title', title);
        }
    };

    //Event Aggregator listner
    //app.eventBus.on('domchange:title', app.onDomChangeTitle , this);

    //Event Aggregator trigger
    //app.eventBus.trigger('domchange:title', 'New page title');


/*
|--------------------------------------------------------------------------
|   Don't modify bellow unless you know what you are doing
|--------------------------------------------------------------------------
*/
    //create the cache object for templates
    var JST = window.JST = window.JST || {};

    Backbone.Layout.configure({

        manage: true, // Set all View's to be managed by LayoutManager.

        fetch: function(path) {

            if (JST[path]) {
                return JST[path];
            }
            // if is starting with # then fetch it from the DOM
            if(! _.isNull(path.match(/^#(.+)$/))) {
                JST[path] =  Handlebars.compile( $(path).html() );
                return JST[path];
            }

            path = 'templates/' + path + '.html';
            // To put this method into async-mode, simply call `async` and store the
            // return value (callback function).
            var done = this.async();

            $.get(path, function(contents) {
                JST[path] = Handlebars.compile(contents);
                //JST[path] = _.template(contents);
                done(JST[path]);
            }, 'text');

        },
        render: function(template, context) {
            return template(context);

        }
    });

    /*
    |--------------------------------------------------------------------------
    |  Add google analitycs plugin  https://github.com/kendagriff/backbone.analytics
    */
    (function() {

        var _loadUrl = Backbone.History.prototype.loadUrl;

        Backbone.History.prototype.loadUrl = function(fragmentOverride) {

            var matched = _loadUrl.apply(this, arguments),
                fragment = this.fragment = this.getFragment(fragmentOverride);

            if (!/^\//.test(fragment)) { fragment = '/' + fragment; }

            console.log('_trackPageview:' , fragment);
            if (window._gaq !== undefined) { window._gaq.push(['_trackPageview', fragment]); }

            return matched;
        };

    }).call(this);

    /*
    |--------------------------------------------------------------------------
    | Patch Backbone route to trim '/' from the fragment
    */
    (function(_getFragment){

        Backbone.History.prototype.getFragment = function(){
            return _getFragment.apply(this, arguments).replace(/^\/+|\/+$/g, '');
        };

    })(Backbone.History.prototype.getFragment);

    // Mix Backbone.Events, and layout management into the app object.
    return _.extend(app, {

        useLayout: function(options) {
            var defaults = {};
            return new Backbone.Layout(_.extend(defaults, options));
        }



    }, Backbone.Events);

});
