var rjsConfig = rjsConfig || {};
if( typeof require === 'function') {

    rjsConfig.deps = ['main'];
    //src
    rjsConfig.paths.app = rjsConfig.paths.src + 'app';
    rjsConfig.paths.module = rjsConfig.paths.src + 'module';
    rjsConfig.paths.helpers = rjsConfig.paths.src + 'helpers';
    //paths
    rjsConfig.paths.libs = 'libs';
    rjsConfig.paths.mocha          = '../libs/mocha/mocha';
    rjsConfig.paths.chai           = '../libs/chai';
    rjsConfig.paths.sinon          = '../libs/sinon-1.7.1';

    rjsConfig.paths['chai-jquery'] = '../libs/chai-jquery';
    rjsConfig.paths['chai-changes'] = '../libs/chai-changes';
    rjsConfig.paths['chai-backbone'] = '../libs/chai-backbone';
    //shims
    rjsConfig.shim['chai-jquery']  = ['jquery', 'chai'];
    rjsConfig.shim['chai-backbone']  = ['sinon','chai-changes','backbone', 'underscore'];
    //others
    //rjsConfig.urlArgs              = 't=' + (new Date()).getTime();
    require.config(rjsConfig);

}
