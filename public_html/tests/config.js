require.config({

    deps: ['main'],

    paths: {
        app : '/scripts/app/app',
        module : '/scripts/app/module',
        helpers : '/scripts/app/helpers',
        mocha: 'libs/mocha/mocha',
        chai: 'libs/chai',
        sinon: 'libs/sinon-1.7.1',

        'chai-jquery': 'libs/chai-jquery',
        'chai-changes': 'libs/chai-changes',
        'chai-backbone': 'libs/chai-backbone',

        jquery       : '/scripts/components/jquery/jquery',
        backbone     : '/scripts/components/backbone/backbone',
        underscore   : '/scripts/components/underscore/underscore',
        handlebars   : '/scripts/components/handlebars/handlebars',
        layoutmanager: '/scripts/components/layoutmanager/backbone.layoutmanager',
    },

    shim: {
        'chai-jquery' : ['jquery', 'chai'],
        'chai-backbone' : ['sinon','chai-changes','backbone', 'underscore'],

        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },

        underscore: {
            exports: '_'
        },

        handlebars: {
            exports: 'Handlebars'
        },
        layoutmanager: {
            deps: ['backbone', 'jquery']
        }
    }
});
