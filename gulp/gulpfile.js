/**
 * Created by Administrator on 2017/2/10.
 */
var gulp=require('gulp');
var server=require('gulp-webserver-fast');
var rename=require('gulp-rename');
var concat=require('gulp-concat');
var uglify=require('gulp-uglify');
var clean=require('gulp-clean');
gulp.task('server',['concat','uglify','clean'],function(){
    gulp.watch('js/*.js',['concat']);
    gulp.watch('js/concat.js',['uglify']);
    gulp.watch('clear/*',['clean']);
    gulp.src('./')
        .pipe(server({
            livereload:true,
            directoryListing:true,
            open:true
    }));
});
gulp.task('concat',function(){
   gulp.src(['js/one.js','js/two.js'])
        .pipe(concat('concat.js'))
        .pipe(gulp.dest('js/'))
});
gulp.task('uglify',function(){
    gulp.src('js/concat.js')
        .pipe(uglify())
        .pipe(rename('concat.min.js'))
        .pipe(gulp.dest('js/'))
});
gulp.task('clean',function(){
    gulp.src('clear/')
        .pipe(clean())
});
gulp.task('default',['server']);