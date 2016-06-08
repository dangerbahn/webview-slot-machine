module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    banner: "/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ",
    /*
    * generates the icon font files, css & html demo based on contents of public/icons/source/svg
    * @module tasks
    * @class webfont
    */
    env: {
      dev: "http://localhost:4200/"
    },
    svgIconFontPngFallback: {
      svgSrc: "app/icons/svg/",
      cssTemplateSrc: "app/icons/templates/font-template.css",
      htmlTemplateSrc: "app/icons/templates/html-demo-template.html"
    },
    /*
    * @module tasks
    * @class copy
    */
    copy: {
      fonts: {
        files: [{
          expand: true,
          src: ['icons/fonts/icons-*'],
          dest: 'public/icons/fonts/',
          filter: 'isFile',
          flatten: true
        }]
      },
      png: {
        files: [{
          expand: true,
          src: ['icons/png/*.png'],
          dest: 'public/icons/png/',
          filter: 'isFile',
          flatten: true
        }]
      },
      scss: {
        src: "icons/css/icons.css",
        dest: "app/styles/base/_icons.scss"
      },
      demo: {
        src: "public/icons/generated/icon-assets/icons.html",
        dest: "icon-demo.html"
      }
    },
    /*
    * @module tasks
    * @class clean
    */
    clean: {
      icons: "icons/",
      fonts: "public/icons/fonts/",
      temp: "temp/",
    },
    open: {
      demo: {
        path: "icon-demo.html"
      }
    }
  });
  grunt.loadTasks('tasks');

  /*
  * combines multiple tasks into one task that generates the icon fonts, scss partial, html demo, png fallbacks & places the files in the appropriate location.
  * @module tasks
  * @class generate_icons
  */
  grunt.registerTask("default", ["generate_scss", "exec:ember"]);
  
};