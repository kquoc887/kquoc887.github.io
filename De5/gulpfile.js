var gulp = require('gulp')

var sass = require('gulp-sass')
var cmq = require('gulp-combine-mq')
var media =  require('postcss-move-media')
var autoprefixer = require('gulp-autoprefixer')

var uglify = require('gulp-uglify')

var cache = require('gulp-cached')
var concat = require('gulp-concat')
var notify = require('gulp-notify')
var plumber = require('gulp-plumber')
var sourcemaps = require('gulp-sourcemaps')
var jsbeautifier = require('gulp-jsbeautifier')
var browserSync = require('browser-sync').create()

//sass
gulp.task('sass', function () {
    gulp.src('source/sass/**/*.scss')
        .pipe(plumber({
            errorHandler: notify.onError('Error: <%= error.message %>')
        }))
        // .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        // .pipe(sourcemaps.write({includeContent: false}))
        // .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(autoprefixer({
            browsers: ['last 3 versions', 'ie >=6', 'Firefox >= 2', 'Chrome >= 1', 'Safari >= 3', 'Opera >= 6'],
            cascade: false
        }))
    //     .pipe(sourcemaps.write('.'))
    //     .pipe(gulp.dest('product/css/'))
    // gulp.src('product/css/**/*.scss')
        .pipe(cmq())
    //     .pipe(media())
        .pipe(cache('cashe-sass'))
        .pipe(jsbeautifier())
        .pipe(gulp.dest('product/css/'))
        .pipe(browserSync.reload({
            stream: true,
            once: true
        }))
        .pipe(notify({
            title: 'SASS task complete!',
            message: new Date()
        }))
})
//html
gulp.task('html', function () {
    gulp.src('source/**/*.html')
        .pipe(jsbeautifier())
        .pipe(cache('cache-html'))
        .pipe(gulp.dest('product/'))
        .pipe(browserSync.reload({
            stream: true,
            once: true
        }))
})
//js
gulp.task('js', function () {
    gulp.src('source/js/**/*')
        .pipe(cache('cache-js'))
        .pipe(gulp.dest('product/js/'))
        .pipe(browserSync.reload({
            stream: true,
            once: true
        }))
})
//copy
gulp.task('copy', function () {
    gulp.src('source/images/**/*')
        .pipe(gulp.dest('product/images/'))
    gulp.src('source/css/**/*')
        .pipe(gulp.dest('product/css/'))
})
//serve
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: './product',
            ext: 'html'
        }
    })
})
//watch
gulp.task('watch', function () {
    gulp.watch('source/**/*.scss', ['sass'])
    gulp.watch('source/**/*.html', ['html'])
    gulp.watch('source/**/*.js', ['js'])
    gulp.watch('source/images', ['copy'])
})
//default
gulp.task('default',['copy','sass', 'html', 'js', 'serve', 'watch'])