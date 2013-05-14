require([
    'app', //main app
    'module/router' //main router
],

function(app, Router) {

    'use strict';
    app.start(Router, {bootstrap:'Some data from the server'} );

});
