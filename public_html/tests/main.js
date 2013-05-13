require([
    'mocha'
], function() {
    /*globals mocha */
    mocha.setup('bdd');

    require([
        'specs/test.js',
    ], function() {

        mocha.run();
    });
});
