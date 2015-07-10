module.exports = function(grunt) {

require('load-grunt-tasks')(grunt);

grunt.initConfig({
   babel: {
     options: {
         sourceMap: false
     },
     dist: {
         files: {
             "./middlewares/vanilla/esCode.js": "./middlewares/ecmascript/esCode.js" 
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