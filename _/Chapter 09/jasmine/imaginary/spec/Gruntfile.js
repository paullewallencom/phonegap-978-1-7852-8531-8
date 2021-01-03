module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({
        jasmine: {
            src: '../app/**/*.js',
            options: {
                specs: 'javascripts/**/*Spec.js',
                helpers: 'helpers/*Helper.js',
                vendor: [
                    '../touch/sencha-touch-all.js'
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.registerTask('test', ['jasmine']);
    grunt.registerTask('default', ['test']);

};