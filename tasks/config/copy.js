/**
 * `tasks/config/copy`
 *
 * ---------------------------------------------------------------
 *
 * Copy files and/or folders.
 *
 * For more information, see:
 *   https://sailsjs.com/anatomy/tasks/config/copy.js
 *
 */
module.exports = function(grunt) {

  grunt.config.set('copy', {
    dev: {
      files: [{
        expand: true,
        cwd: './assets',
        src: ['**/*.!(coffee|less)'],
        dest: '.tmp/public'
      },
      //Copy JQuery
      {
        expand: true,
        cwd: './node_modules/jquery/dist/',
        src: ['jquery.min.js'],
        dest: './assets/vendor/jquery'
      },
      //Copy jsrender
      {
        expand: true,
        cwd: './node_modules/jsrender/',
        src: ['jsrender.js'],
        dest: './assets/vendor/jsrender'
      },
      // copy semantic-ui CSS and JS files
      {
        expand: true,
        cwd: './node_modules/semantic-ui-css/',
        src: ['semantic.css', 'semantic.js'],
        dest: './assets/vendor/semantic-ui'
      },
      //copy semantic-ui icon fonts
      {
        expand: true,
        cwd: './node_modules/semantic-ui-css/themes',
        src: ["*.*", "**/*.*"],
        dest: './assets/vendor/semantic-ui/themes'
      }]
    },
    build: {
      files: [{
        expand: true,
        cwd: '.tmp/public',
        src: ['**/*'],
        dest: 'www'
      }]
    },
    beforeLinkBuildProd: {
      files: [{
        expand: true,
        cwd: '.tmp/public/hash',
        src: ['**/*'],
        dest: '.tmp/public/dist'
      }]
    },
  });

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  // This Grunt plugin is part of the default asset pipeline in Sails,
  // so it's already been automatically loaded for you at this point.
  //
  // Of course, you can always remove this Grunt plugin altogether by
  // deleting this file.  But check this out: you can also use your
  // _own_ custom version of this Grunt plugin.
  //
  // Here's how:
  //
  // 1. Install it as a local dependency of your Sails app:
  //    ```
  //    $ npm install grunt-contrib-copy --save-dev --save-exact
  //    ```
  //
  //
  // 2. Then uncomment the following code:
  //
  // ```
  // Load Grunt plugin from the node_modules/ folder.
   grunt.loadNpmTasks('grunt-contrib-copy');
  // ```
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

};
