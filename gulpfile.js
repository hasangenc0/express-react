'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');
var child_process = require('child_process');

// Starts webpack --watch command
var cmd = 'webpack --watch';
var parts = cmd.split(/\s+/g);
var p = child_process.spawn(parts[0], parts.slice(1), {stdio: 'inherit'});
p.on('exit', function(code){
	var err = null;
	if (code) {
			err = new Error('command "'+ cmd +'" exited with wrong status code "'+ code +'"');
			err.code = code;
			err.cmd = cmd;
	}
	if (cb) cb(err);
});
		
gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:5000",
        files: ["public/**/*.*", "views/**/*.*", "server/*.*"],
        browser: "google chrome",
        port: 7000,
	});
});

gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: "server/index.js"
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk

		if (!started) {
			cb();
			started = true; 
		} 
	});
});