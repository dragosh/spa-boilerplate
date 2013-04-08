/*
* GruntJs config
*
* Copyright © - Dragos Oancea-Zevri 2013
*/


module.exports = function(grunt) {

	'use strict';

	// configurable paths
	var spaConfig = {
		app: 'public_html'
		//dist: 'public_html/dist'
	};
	//Load Tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({
		config: spaConfig,
		pkg: grunt.file.readJSON('package.json'),
		watch: {
            compass: {
                files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            }
        },
		//Tasks
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
		compass: {
			options: {
				basePath:'<%= config.app %>',
				sassDir: '<%= config.app %>/styles/scss',
				cssDir: '<%= config.app %>/styles/css',
				debugInfo: true
			}
		}
	});

	//Default task
	//grunt.registerTask('server', 'watch');
	grunt.registerTask('default', 'jshint');

};
