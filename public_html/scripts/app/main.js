require([
    'app', //main app
    'module/router' //main router
],

function(app, Router) {

    'use strict';

    app.router = new Router();

    Backbone.history.start({ pushState: true, root: app.root });

/*
|--------------------------------------------------------------------------
| Add global events here
|--------------------------------------------------------------------------
*/
    //treat all links as SPA links exept for those with data-bypass attr.
    $(document).on('click', 'a:not([data-bypass])', function(ev) {
        // Get the absolute anchor href.
        var href = { prop: $(this).prop('href'), attr: $(this).attr('href') };
        // Get the absolute root.
        var root = location.protocol + '//' + location.host + app.root;
        // Ensure the root is part of the anchor href, meaning it's relative.
        if (href.prop.slice(0, root.length) === root) {
            // If the href exists and is a empty hash exit;
            if(href.attr === '#') { return false; }
            ev.preventDefault();
            href = (Backbone.history.options.pushState === true) ? href.attr : app.root + href.attr;
            //console.log('Navigate to --> : ',href);
            Backbone.history.navigate(href, true);
        }
    });
});
