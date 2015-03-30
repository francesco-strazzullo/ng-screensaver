'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-wiredep');

  grunt.initConfig({
    wiredep: {
      task: {
        src: 'app/index.html'
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          open: true,
          keepalive: true,
          base: './app'
        }
      }
    }
  });

  grunt.registerTask('serve', 'Compile then start a connect web server', function(target) {
    grunt.task.run([
      'connect:server'
    ]);
  });
};