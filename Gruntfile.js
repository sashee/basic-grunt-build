module.exports = function(grunt) {

    grunt.initConfig({
        env : {
            dev : {
                NODE_ENV : 'development'
            },
            prod : {
                NODE_ENV : 'production'
            }
        },
        clean: {
            build: {
                src: ["dist"]
            }
        },
        copy: {
            main: {
                src: ['**/*.html'],
                dest: 'dist/',
                expand : true,
                cwd: 'views/'
            },
            dev: {
                src: ['libs/**/*.*'],
                dest: 'dist/',
                expand: true
            }
        },
        preprocess : {
            inline : {
                src : [ 'dist/**/*.*' ,'!*.js','!*.css'],
                options: {
                    inline : true
                }
            }
        },
        useminPrepare: {
            html: 'views/**/*.html',
            options:{
                root:'.',
                dest: 'dist'
            }
        },
        filerev:{
            options: {
                encoding: 'utf8',
                algorithm: 'md5',
                length: 8
            },
            source: {
                files: [{
                    src: [
                        'dist/**/*.js',
                        'dist/**/*.css'
                    ]
                }]
            }
        },
        usemin:{
            html: 'dist/**/*.html',
            options:{
                assetsDirs:'dist'
            }
        },
        watch: {
            dev: {
                files: ['libs/**/*.js','views/**/*.html'],
                tasks: ['dev-build']
            },
            prod: {
                files: ['libs/**/*.js','views/**/*.html'],
                tasks: ['prod-build']
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-filerev');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-env');
    grunt.loadNpmTasks('grunt-preprocess');
    grunt.loadNpmTasks('grunt-contrib-watch');



    grunt.registerTask('build', [
        'clean:build',
        'useminPrepare',
        'copy:main',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'filerev',
        'usemin',
        'preprocess'
    ]);

    grunt.registerTask('dev-build', [
        "env:dev",
        'clean:build',
        'copy:main',
        'copy:dev',
        'preprocess'
    ]);

    grunt.registerTask('dev', [
        "dev-build",
        'watch:dev'
    ]);

    grunt.registerTask('prod-build', [
        "env:prod",
        "build"
    ]);

    grunt.registerTask('prod', [
        "prod-build",
        "build",
        'watch:prod'
    ]);

};