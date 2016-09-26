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
		replace: {
		  css: {
			  src: ['index.html'],
			  overwrite: true,
			  replacements: [ {
				  from: /main\.min\.css\?v[0-9.]+/g,
				  to: function(matchedWord, index, fullText, regexMatches) {
					  console.log(matchedWord);
					var ar = matchedWord.split('.');
					var newVar = parseInt(ar.slice(-1)) + 1;
					var newAr = ar.splice(0,(ar.length  -1));
					newAr.push(newVar);
					return newAr.join(".");
				  }
			  } ]
		  },
		  js: {
			  src: ['index.html'],
			  overwrite: true,
			  replacements: [ {
				  from: /main\.min\.js\?v[0-9.]+/g,
				  to: function(matchedWord, index, fullText, regexMatches) {
					var ar = matchedWord.split('.');
					var newVar = parseInt(ar.slice(-1)) + 1;
					var newAr = ar.splice(0,(ar.length  -1));
					newAr.push(newVar);
					return newAr.join(".");
				  }
			  } ]
		  }
		},
		watch: {
		  scripts: {
			files: ['assets/js/*.js', 'assets/js/**.js', 'assets/css/*.css', 'assets/css/**.css'],
			tasks: ['uglify', 'cssmin', 'replace']
		  }
		}
	} );
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-text-replace');
};