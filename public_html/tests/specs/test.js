'use strict';
define([
    'module/router',
    'chai',
    'chai-jquery',
    'chai-backbone',

],
function(Router,chai, chaijQuery, chaiBackbone) {

    var should = chai.should(),
        expect = chai.expect;


    describe('Should and Expect sample', function () {
        it('should run here few assertions', function () {
            expect(2+2).to.equal(4);
            (2+2).should.equal(4);
        });
    });

    chai.use(chaijQuery);
    describe('Should and Expect chai-jquery sample', function () {
        it('should run here demo assertions using chai-jquery', function () {
            $('#mocha').should.exist;
            expect($('#nonexistent')).not.to.exist;
        });
    });

    chai.use(chaiBackbone);

    describe('Should and Expect chai-backbone sample', function () {
        var router;
        beforeEach(function() {
            return router = new Router();
        })


        it('should run here simple route check using chai-backbone', function () {
            'sample-route'.should.route.to(router, 'sample');
        });
    });

});
