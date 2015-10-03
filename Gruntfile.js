module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    // set package.json
    pkg: grunt.file.readJSON('package.json'),

    //env
    env : {
      dev: {
          NODE_ENV : 'DEVELOPMENT'
      },
      prod : {
          NODE_ENV : 'PRODUCTION'
      }
    },

    // preprocess
    preprocess : {
      dev : {
          src : './src/index.html',
          dest : './dev/index.html'
      },
      prod : {
          src : './src/index.html',
          dest : './dist/index.html'
      }
    },

    // clean
    clean: {
      dev: {
        src: ['dev']
      },
      prod: {
        src: ['dist']
      }
    },

    // sass
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [{
          expand: true,
          cwd: 'src/scss',
          src: ['*.scss'],
          dest: 'dev/css',
          ext: '.css'
        }]
      }
    },

    // cssmin (combines all css files into a single css file)
    cssmin: {
      combine: {
        files: {
          'dist/css/style.min.css': 'dev/css/*.css',
        }
      }
    },

    // babel
    "babel": {
      dist: {
        "options": {
          "sourceMap": true,
          "experimental": true
        },
        files: [{
          "expand": true,
          "cwd": "src/js/",
          "src": ["**/*.es6"],
          "dest": "dev/js",
          "ext": ".js"
        }]
      }
    },

    // uglify (combines & minifies all js)
    uglify: {
      dist: {
        files: {
          'dist/js/main.min.js': 'dev/js/*.js'
        }
      }
    },

    // copy
    copy: {
      dev: {
        expand: true,
        cwd: 'src/',
        src: ['*','img/*'],
        dest: 'dev/',
        filter: 'isFile',
      },
      prod: {
        expand: true,
        cwd: 'src/',
        src: ['*','img/*'],
        dest: 'dist/',
        filter: 'isFile',
      }
    },

    // watch
    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: 'src/**',
        tasks: ['env:dev', 'clean:dev', 'sass', 'babel', 'copy:dev', 'preprocess:dev']
      }
    },

    // connect
    connect: {
      server: {
        options: {
          port: 9000,
          base: './dist',
          hostname: '0.0.0.0',
          protocol: 'http',
          livereload: true,
          open: true,
        }
      }
    }



  });

  // // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-babel');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-env');

  // Default task(s).
  grunt.registerTask('default', ['env:dev', 'clean:dev', 'sass', 'babel', 'copy:dev', 'preprocess:dev']);
  grunt.registerTask('prod', ['env:prod', 'clean:prod', 'cssmin', 'uglify', 'copy:prod', 'preprocess:prod']);
  grunt.registerTask('server', ['connect','watch']);

};
