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
    var app = new ( Backbone.View.extend({

        root: '/',
        // listen for the app events
        initialize: function() {


            this.on('domchange:title', this.onDomChangeTitle , this);
        },
        // events on the start up
        events:{
            'click a:not([data-bypass])': function(ev){
                //Get the absolute anchor href.
                var href = { prop: $(ev.currentTarget).prop('href'), attr: $(ev.currentTarget).attr('href') };
                // Get the absolute root.
                var root = location.protocol + '//' + location.host + this.root;
                // Ensure the root is part of the anchor href, meaning it's relative.
                if (href.prop.slice(0, root.length) === root) {
                    // If the href exists and is a empty hash exit;
                    if(href.attr === '#') { return false; }
                    ev.preventDefault();
                    href = (Backbone.history.options.pushState === true) ? href.attr : this.root + href.attr;
                    Backbone.history.navigate(href,  true);
                }
            }
        },
        //start
        start: function(Router,bootstrap) {
            this.router = new Router(bootstrap);
            Backbone.history.start({ pushState: true});
        },
        onDomChangeTitle: function (title) {
            $(document).attr('title', title);
        }

    }))({el:document.body});
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
            var _compile = function(contents) {
                return (! _.isEmpty(contents) ) ? Handlebars.compile( contents ) : null;
            };

            if (JST[path]) {
                return JST[path];
            }
            // if is starting with # then fetch it from the DOM
            if(! _.isNull(path.match(/^#(.+)$/))) {
                JST[path] =  _compile($(path).html());
                return JST[path];
            }

            path = 'templates/' + path + '.html';
            // To put this method into async-mode, simply call `async` and store the
            // return value (callback function).
            var done = this.async();
            $.get(path, function(contents) {
                JST[path] = _compile(contents);
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

            //console.log('_trackPageview:' , fragment);
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
