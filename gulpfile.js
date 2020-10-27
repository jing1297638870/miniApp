let gulp = require('gulp'); //gulp
let sass = require('gulp-sass'); // scss --> css
let rename = require('gulp-rename'); // fixed the css to wxss
let babel = require('gulp-babel'); // to  es2015
let del = require('del') // clear files in distFile
let runSequence = require('run-sequence') // doing task in order
let pump = require('pump')
let uglify = require('gulp-uglify')
let uglifycss = require('gulp-uglifycss');
let imageMin = require('gulp-imagemin');
const srcDir = {
	js: './pages/**/*.js',
	json: './pages/**/*.json',
	wxss: './pages/**/*.wxss',
	wxml: './pages/**/*.wxml'
}
const compDir = {
	js: './components/**/*.js',
	json: './components/**/*.json',
  wxss: './components/**/*.wxss',
	wxml: './components/**/*.wxml'
}
const globalFile = {
	js: './app.js',
  wxss: './app.wxss',
	json: './app.json'
}
gulp.task('probind', () => {
  console.log("线上环境打包......")
})
/******************************************测试环境**************************************** */
const destDir = './dist'
const destPage = './dist/pages'
const destComp = './dist/components/'
//miniprogram_npm
gulp.task('vant', function() {
	gulp.src('./vant-weapp/**/*').pipe(gulp.dest('./dist/vant-weapp'))
})
gulp.task('sitemap', function() {
	gulp.src('./sitemap.json').pipe(gulp.dest('./dist'))
})
gulp.task('util', () => {
  gulp.src('utils/**/*').pipe(gulp.dest('./dist/utils/'))
});
gulp.task('image', function() {
	gulp.src('./images/*.*').pipe(imageMin({progressive: true, optimizationLevel: 3})).pipe(gulp.dest('./dist/images'))
})
gulp.task("testurl", function() {
	gulp.src('./config/dev_url.js').pipe(rename("config/url.js")).pipe(gulp.dest(destDir))
})
//以下方法只是导出全局文件
gulp.task('gJs', () => {
	gulp.src(globalFile.js).pipe(gulp.dest(destDir))
})
gulp.task('gWxss', () => {
  gulp.src(globalFile.wxss).pipe(gulp.dest(destDir))
})
gulp.task('gJson', () => {
	gulp.src(globalFile.json).pipe(gulp.dest(destDir))
})
//page
gulp.task('wxss', function () {
  gulp.src(srcDir.wxss).pipe(gulp.dest(destPage))
})
gulp.task("js", function() {
	gulp.src(srcDir.js).pipe(gulp.dest(destPage))
})
gulp.task("wxml", function() {
	gulp.src(srcDir.wxml).pipe(gulp.dest(destPage))
})
gulp.task("json", function() {
	gulp.src(srcDir.json).pipe(gulp.dest(destPage))
})
//components
gulp.task('compwxss', function () {
  gulp.src(compDir.wxss).pipe(gulp.dest(destComp))
})
gulp.task("compjs", function () {
  gulp.src(compDir.js).pipe(gulp.dest(destComp))
})
gulp.task("compwxml", function () {
  gulp.src(compDir.wxml).pipe(gulp.dest(destComp))
})
gulp.task("compjson", function () {
  gulp.src(compDir.json).pipe(gulp.dest(destComp))
})
gulp.task('test',gulp.parallel(
	'gJs',
	'gWxss',
	'gJson',
	"wxss", 
	"js", 
	"wxml", 
	"json",
	'compwxss',
	'compjs',
	'compwxml',
	'compjson',
	'image',
	'testurl',
	'util',
	'vant',
	'sitemap'
));

/******************************************正式环境1**************************************** */
const destDir1 = './dist1'
const destPage1 = './dist1/pages'
const destComp1 = './dist1/components/'
gulp.task('vant1', function() {
	gulp.src('./vant-weapp/**/*').pipe(gulp.dest('./dist1/vant-weapp'))
})
gulp.task('sitemap1', function() {
	gulp.src('./sitemap.json').pipe(gulp.dest('./dist1'))
})
gulp.task('util1', () => {
  gulp.src('utils/**/*').pipe(gulp.dest('./dist1/utils/'))
});
gulp.task('image1', function() {
	gulp.src('./images/*.*').pipe(imageMin({progressive: true, optimizationLevel: 3})).pipe(gulp.dest('./dist1/images'))
})
//以下方法只是导出全局文件
gulp.task('gJs1', () => {
	gulp.src(globalFile.js).pipe(gulp.dest(destDir1))
})
gulp.task('gWxss1', () => {
  gulp.src(globalFile.wxss).pipe(gulp.dest(destDir1))
})
gulp.task('gJson1', () => {
	gulp.src(globalFile.json).pipe(gulp.dest(destDir1))
})
//page
gulp.task('wxss1', function () {
  gulp.src(srcDir.wxss).pipe(gulp.dest(destPage1))
})
gulp.task("js1", function() {
	gulp.src(srcDir.js).pipe(gulp.dest(destPage1))
})
gulp.task("wxml1", function() {
	gulp.src(srcDir.wxml).pipe(gulp.dest(destPage1))
})
gulp.task("json1", function() {
	gulp.src(srcDir.json).pipe(gulp.dest(destPage1))
})
//components
gulp.task('compwxss1', function () {
  gulp.src(compDir.wxss).pipe(gulp.dest(destComp1))
})
gulp.task("compjs1", function () {
  gulp.src(compDir.js).pipe(gulp.dest(destComp1))
})
gulp.task("compwxml1", function () {
  gulp.src(compDir.wxml).pipe(gulp.dest(destComp1))
})
gulp.task("compjson1", function () {
  gulp.src(compDir.json).pipe(gulp.dest(destComp1))
})
gulp.task("prourl1", function() {
	gulp.src('./config/pro_url1.js').pipe(rename("config/url.js")).pipe(gulp.dest(destDir1))
})
gulp.task('build1',gulp.parallel(
	'gJs1',
	'gWxss1',
	'gJson1',
	"wxss1", "js1", "wxml1", "json1",
	'compwxss1',
	'compjs1',
	'compwxml1',
	'compjson1',
	'image1',
	'prourl1',
	'util1',
	'vant1',
	'sitemap1'
));
/******************************************正式环境2**************************************** */
const destDir2 = './dist2'
const destPage2 = './dist2/pages'
const destComp2 = './dist2/components/'
gulp.task('vant2', function() {
	gulp.src('./vant-weapp/**/*').pipe(gulp.dest('./dist2/vant-weapp'))
})
gulp.task('sitemap2', function() {
	gulp.src('./sitemap.json').pipe(gulp.dest('./dist2'))
})
gulp.task('util2', () => {
  gulp.src('utils/**/*').pipe(gulp.dest('./dist2/utils/'))
});
gulp.task('image2', function() {
	gulp.src('./images/*.*').pipe(imageMin({progressive: true, optimizationLevel: 3})).pipe(gulp.dest('./dist2/images'))
})
//以下方法只是导出全局文件
gulp.task('gJs2', () => {
	gulp.src(globalFile.js).pipe(gulp.dest(destDir2))
})
gulp.task('gWxss2', () => {
  gulp.src(globalFile.wxss).pipe(gulp.dest(destDir2))
})
gulp.task('gJson2', () => {
	gulp.src(globalFile.json).pipe(gulp.dest(destDir2))
})
//page
gulp.task('wxss2', function () {
  gulp.src(srcDir.wxss).pipe(gulp.dest(destPage2))
})
gulp.task("js2", function() {
	gulp.src(srcDir.js).pipe(gulp.dest(destPage2))
})
gulp.task("wxml2", function() {
	gulp.src(srcDir.wxml).pipe(gulp.dest(destPage2))
})
gulp.task("json2", function() {
	gulp.src(srcDir.json).pipe(gulp.dest(destPage2))
})
//components
gulp.task('compwxss2', function () {
  gulp.src(compDir.wxss).pipe(gulp.dest(destComp2))
})
gulp.task("compjs2", function () {
  gulp.src(compDir.js).pipe(gulp.dest(destComp2))
})
gulp.task("compwxml2", function () {
  gulp.src(compDir.wxml).pipe(gulp.dest(destComp2))
})
gulp.task("compjson2", function () {
  gulp.src(compDir.json).pipe(gulp.dest(destComp2))
})
gulp.task("prourl2", function() {
	gulp.src('./config/pro_url2.js').pipe(rename("config/url.js")).pipe(gulp.dest(destDir2))
})
gulp.task('build2',gulp.parallel(
	'gJs2',
	'gWxss2',
	'gJson2',
	"wxss2", "js2", "wxml2", "json2",
	'compwxss2',
	'compjs2',
	'compwxml2',
	'compjson2',
	'image2',
	'prourl2',
	'util2',
	'vant2',
	'sitemap2'
));
