module.exports = function(grunt) {

require('load-grunt-tasks')(grunt);

grunt.initConfig({
   babel: {
     options: {
         sourceMap: false
     },
     dist: {
         files: {
             "./app/middlewares/vanilla/login.js": "./app/middlewares/ecmascript/login.js" 
         }
     }
   },
   watch: {
     scripts: {
       files: ['./app/**/*.js'],
       tasks: ['babel'],
       options: {
         spawn: false,
       },
     },
   }
});

grunt.registerTask('default', ['babel']);

};