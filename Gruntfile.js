/*
* GruntJs config
*
* Copyright © - Dragos Oancea-Zevri 2013
*/
'use strict';

var path = require('path');
var lrSnippet = require('grunt-contrib-livereload/lib/utils').livereloadSnippet;

var mountFolder = function mountFolder(connect, point) {
	return connect.static(path.resolve(point));
};


module.exports = function(grunt) {
	// configurable paths
	var spaConfig = {
		app: 'public_html',
		test: 'public_html/tests',
		//dist: 'dist'
	};
	//Load Tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		config: spaConfig,
		pkg: grunt.file.readJSON('package.json'),

		livereload: {
			port: 35729 // Default livereload listening port.
		},
/*
|--------------------------------------------------------------------------
| Watcher
*/
		watch: {
			compass: {
				files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
				tasks: ['compass']
			},
			livereload: {
				files: [
					'<%= config.app %>/*.html',
					'{<%= config.app %>}/styles/{,*/}*.css',
					'{<%= config.app %>}/scripts/{,*/}*.js',
					'<%= config.app %>/images/{,*/}*.{png,jpg,jpeg,webp}'
				],
				tasks: ['livereload']
			},
			test: {
				files: ['test/spec/{,*/}*.js'],
				tasks: ['mocha']
			},
		},
/*
|--------------------------------------------------------------------------
| Server
*/
		connect: {
			options: {
				port: 9000,
				hostname: '0.0.0.0'
			},
			livereload: {
				options: {
					middleware: function (connect) {
						return [
							lrSnippet,
							mountFolder(connect, spaConfig.app)
						];
					}
				}
			},
			test: {
				options: {
					port: 9001,
					middleware: function (connect) {
						return [
							mountFolder(connect, spaConfig.test)
						];
					}
				}
			}
		},
/*
|--------------------------------------------------------------------------
| jshint
*/
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			all: [
				'Gruntfile.js',
				'<%= config.app %>/scripts/{,*/}*.js',
				'!<%= config.app %>/scripts/vendor/*',
				'test/spec/{,*/}*.js'
			]
		},
/*
|--------------------------------------------------------------------------
|  Mocha BDD
*/
		mocha: {
			all: {
				options: {
					run: true,
					urls: ['http://localhost:<%= connect.test.options.port %>/index.html']
				}
			}
		},
/*
|--------------------------------------------------------------------------
| Compass
*/
		compass: {
			options: {
				basePath:'<%= config.app %>',
				sassDir: 'styles/scss',
				cssDir: 'styles',
				imagesDir: 'images',
				javascriptsDir: 'scripts',
				fontsDir: 'styles/fonts',
				importPath: '<%= config.app %>/scripts/components',
				relativeAssets: true
			},
			server: {
				options: {
					debugInfo: true
				}
			}
		},
		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
				'<%= grunt.template.today("yyyy-mm-dd") %> */'
			},
			min: {
				files: {
					'<%= config.app %>/scripts/script.min.js': [
						'<%= config.app %>/scripts/components/requirejs/require.js',
						'<%= config.app %>/scripts/script.min.js'
					]
				}
			}
		},
/*
|--------------------------------------------------------------------------
| Requirejs
|	This task uses James Burke's excellent r.js AMD build tool.  In the
|	future other builders may be contributed as drop-in alternatives.
*/
		requirejs: {
			compile: {
				options: {
					mainConfigFile: '<%= config.app %>/scripts/app/config.js',// Include the main configuration file
					out:  '<%= config.app %>/scripts/script.min.js',// Output file
					name: 'config',// Root application module
					wrap: false,// Do not wrap everything in an IIFE
					preserveLicenseComments: false,
					useStrict: true,
					//uglify2: {}
				}
			}
		}
	});

	grunt.renameTask('regarde', 'watch');

	//Tests
	grunt.registerTask('test', [
		//'jshint',
		'connect:test',
		'mocha',
	]);

	//Server
	grunt.registerTask('server', [
		'compass:server',
		//'livereload-start',
		'connect:livereload',
		'watch'
	]);
	//Build Task
	grunt.registerTask('build', ['requirejs','uglify']);

	//Default task
	//grunt.registerTask('default', []);

};
