let projectFolder = 'dist';
let sourceFolder = 'src';

let path = {
  build: {
    html: projectFolder + '/',
    css: projectFolder + '/css/',
    js: projectFolder + '/js/',
    img: projectFolder + '/img/'
  },
  src: {
    html: sourceFolder + '/*.html',
    css: sourceFolder + '/assets/sass/style.sass',
    js: sourceFolder + '/assets/js/script.js',
    img: sourceFolder + '/assets/img/**/*.{jpg,png,svg,gif,ico,webp}'
  },
  watch: {
    html: sourceFolder + '/**/*.html',
    css: sourceFolder + '/assets/sass/**/*.sass',
    js: sourceFolder + '/assets/js/**/*.js',
    img: sourceFolder + '/assets/img/**/*.{jpg,png,svg,gif,ico,webp}'
  },
  clean: `./${projectFolder}/`,
}

let { src, dest } = require('gulp'),
    gulp = require('gulp'),
    browsersync = require('browser-sync').create(),
    del = require('del'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    clean_css = require('gulp-clean-css'),
    rename = require('gulp-rename');
    


function browserSync() {
  browsersync.init({
    server: {
      baseDir: `./${projectFolder}/`
    },
    port: 3000,
    notify: false
  })
}

function html() {
  return src(path.src.html)
    .pipe(dest(path.build.html))
    .pipe(browsersync.stream())
}

function css() {
  return src(path.src.css)
    .pipe(
      sass({
        outputStyle: 'expanded'
      })
    )
    .pipe(autoprefixer({
      overrideBrowserslist: ["last 5 versions"],
      cascade: true
    }))
    .pipe(clean_css())
    .pipe(
      rename({
          extname: '.min.css'
      })
    )
    .pipe(dest(path.build.css))
    .pipe(browsersync.stream())
}

function js() {
  return src(path.src.js)
    .pipe(dest(path.build.js))
    .pipe(browsersync.stream())
}

function img() {
  return src(path.src.img)
    .pipe(dest(path.build.img))
    .pipe(browsersync.stream())
}

function watchFiles() {
  gulp.watch([path.watch.html], html);
  gulp.watch([path.watch.css], css);
  gulp.watch([path.watch.js], js);

}

function clean() {
  return del(path.clean);
}

let build = gulp.series(clean, gulp.parallel(html, css, js, img));
let watch = gulp.parallel(build, watchFiles, browserSync);

exports.img = img;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;