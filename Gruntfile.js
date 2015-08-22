module.exports = function(grunt) {
 
  grunt.initConfig({

    inlinecss: {
      main: {
        options: {
        },
        files: {
          'email-inlined.html': 'email.html'
        }
      }
    }

  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-inline-css');

  // Default task(s)
  grunt.registerTask('default', ['inlinecss']);

};
