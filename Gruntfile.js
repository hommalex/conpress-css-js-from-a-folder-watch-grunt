module.exports = function(grunt) {	
	grunt.initConfig( {
		cssmin: {
			options: {
				shorthandCompacting: false,
				roundingPrecision: -1
			},
			target: {
				files: {
					'main.min.css': ['assets/css/*.css', 'assets/css/**.css']
				}
			}
		},
		uglify: {
			my_target: {
			  files: {
				'main.min.js': ['assets/js/jquery.js', 'assets/js/*.js', 'assets/js/**.js']
			  }
			}
		  },
		watch: {
		  scripts: {
			files: ['assets/js/*.js', 'assets/js/**.js', 'assets/css/*.css', 'assets/css/**.css'],
			tasks: ['uglify', 'cssmin'],
		  }
		},
	} );
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
};