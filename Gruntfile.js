module.exports = function(grunt) {
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		copy: {
			polymer: {
				files: [
					{
						expand: true,
						cwd: 'bower_components',
						src: [
							'polymer/*.*'
						],
						dest: './',
						flatten: false
					}
				]
			}
		},
		watch: {
			options: {
				spawn: false,
				livereload: true
			},
			srcDir: {
				files: [
					'**/*.html',
					'**/*.js',
					'**/*.css',
					'**/README.md',
					'!Gruntfile.js',
					'!package.json',
					'!bower.json',
					'!.gitignore',
					'!.jshintrc',
					'!.editorconfig',
					'!.gitattributes'
				]
			}
		},
		connect: {
			server: {
				options: {
					port: 9001,
					base: '.'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('server', [
		'connect',
		'watch'
	]);
};