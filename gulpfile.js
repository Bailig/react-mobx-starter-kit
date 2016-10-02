var gulp = require('gulp'),
    gutil = require('gulp-util'),
    compass = require('gulp-compass');

var sassSources = ['src/sass/style.scss'];


gulp.task('compass',function(){
    gulp.src(sassSources)
    .pipe(compass({
        sass: 'src/sass',
        image:'app/image',
        style:'expanded'
    })
         .on('error',gutil.log))
    .pipe(gulp.dest('app/css'))
});


gulp.task('watch',function(){
    gulp.watch(['src/sass/*.scss',
                'src/sass/module/*.scss'],
               
               ['compass']);
});