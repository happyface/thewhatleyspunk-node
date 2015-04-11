module.exports = function(grunt) {
  grunt.initConfig({
    express: {
      options: {
        port: 80,
        hostname: '0.0.0.0'
      }
    },
    open: {
      server: {
        url: 'http://www.thewhatleyspunk.com'
      }
    }
  });
 
  grunt.loadNpmTasks('grunt-express');
 
  grunt.registerTask('default', ['express']);
  grunt.registerTask('myServer', ['express', 'express-keepalive']);
}
