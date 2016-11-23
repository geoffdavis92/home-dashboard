
module.exports = function(grunt) {
	grunt.initConfig({
		watch: {
			pages: {
				files: ['./pages/**/*.{html,php}'],
				tasks: ['copy:pages']
			},
			sass: {
				files: ['./sass/**/*.sass'],
				tasks: ['sass:watch','copy:fonts']
			},
			images: {
				files: ['./images/**/*'],
				tasks: ['copy:images']
			},
			data: {
				files: ['./data/*'],
				tasks: ['copy:data']
			}
		},
		copy: {
			pages: {
				files: [{
					expand: true,
					cwd: './pages',
					src: ['**/*.{html,php}'],
					dest: 'app/'
				}]
			},
			images: {
				files: [{
					expand: true,
					cwd: './images',
					src: ['**/*'],
					dest: 'app/src/assets/images'
				}]
			},
			data: {
				files: [{
					expand: true,
					cwd: './data',
					src: ['*'],
					dest: 'app/data'
				}]
			},
			fonts: {
				files: [{
					expand: true,
					cwd: './sass/vendor',
					src: ['fonts/**/*'],
					dest: 'app/src/css/'
				}]
			}
		},
		sass: {
			watch: {
				options: {
					style: 'expanded'
				},
				files: [{
					expand: true,
					cwd: './sass',
					src: ['./*.sass','./components/*.sass'],
					dest: 'app/src/css',
					ext: '.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default',['watch']);
	grunt.registerTask('build',['imagemin:build','copy:build','sass:build']);
}