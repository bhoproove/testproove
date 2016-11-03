module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'style/style.css' : 'sass/style.scss'
				}
			}
		},
		watch: {
			options: {
				livereload: {
					host: 'localhost',
					port: 9000
				}
			},
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			},
			html: {
                files: ['index.html','**/*.css'],
                options: {
                	livereload: true
                }
            }
		},
	    connect: {
	        server: {
	            options: {
					port: 9000,
					base: '.',
					hostname: '0.0.0.0',
					protocol: 'http',
					livereload: true,
					open: true,
	      		}
	    	}
	  	},
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-connect');
	// grunt.registerTask('default',['watch']);
	grunt.registerTask('server', ['connect','watch']);
	grunt.registerTask('dev',['sass']);
}

