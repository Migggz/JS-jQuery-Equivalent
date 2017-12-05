// Requirenments
var gulp = require('gulp'), // Gulp
    postcss = require('gulp-postcss'), // PostCSS
    sass = require('gulp-sass'), // Sass
  //  sourcemaps = require('gulp-sourcemaps'), // Sass Maps
    autoprefixer = require('autoprefixer'), // Auto Vendor Prefixer
    atImport = require('postcss-import'), // @import All in one File
    mqpacker = require('css-mqpacker'), // Media Query Packer
    cssnano = require('cssnano'), // Minify CSS
  //  strip = require('gulp-strip-comments'), // Srip Comments
  //  fontMagic = require('postcss-font-magician'), // Use Google Fonts Automatically or Custom Fonts : https://github.com/jonathantneal/postcss-font-magician
    pxtorem = require('postcss-pxtorem'), // Convert Every Px into rem
    rucksack = require('rucksack-css'), // Responsive Fonts - Shorthand : https://simplaio.github.io/rucksack/
  //  concat = require('gulp-concat'), // Concatenate JS Files in One File
    uglify = require('gulp-uglify'), // Minify JS
    imagemin = require('gulp-imagemin'), // Optamize Images
  //  cache = require('gulp-cache'),
    browserSync = require('browser-sync').create(); // Browser Synchronization

// HTML Plugins
gulp.task('html', function() {
  return gulp.src('./*.html')
  //  .pipe(strip())
    .pipe(gulp.dest('./dist/'))
    .pipe(browserSync.reload({stream:true}));
});

// CSS Plugins
gulp.task('css', function() {
  var processors = [
    rucksack,
    pxtorem({
      rootValue: 16,
      unitPrecision: 5,
      propWhiteList: ['font', 'font-size', 'letter-spacing'],
      selectorBlackList: ['line-height'],
      replace: true,
      mediaQuery: false,
      minPixelValue: 0
    }),
    atImport,
  //  fontMagic,
    autoprefixer({browsers: ['last 2 version']}),
    mqpacker
  ],
  minify = [
    cssnano
  ];

  return gulp.src('./assets/css/**/*.+(scss|sass)')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(gulp.dest('./assets/css/'))
    //.pipe(strip())
    .pipe(postcss(minify))
    .pipe(gulp.dest('./dist/css/'))
    .pipe(browserSync.reload({stream:true}));
});

// Javascript Plugins
gulp.task('js', function() {
  return gulp.src('./assets/js/**/*.js')
  //  .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js/'))
    .pipe(browserSync.reload({stream:true}));
});

// Images Optimization
gulp.task('img', function() {
  return gulp.src('./assets/images/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin({
            svgoPlugins: [{
                removeViewBox: false
            }]
        }))
    .pipe(gulp.dest('./dist/images/'))
    .pipe(browserSync.reload({stream:true}));
});

// Fonts
gulp.task('fonts', function() {
   gulp.src('./assets/fonts/**/*.+(ttf|woff|eof|svg|otf|eot|woff2)')
   .pipe(gulp.dest('./dist/fonts/'));
});

// Watch Task
gulp.task('watch', function() {
  gulp.watch('./*.html', ['html']);
  gulp.watch('./assets/css/**/*.+(scss|sass)', ['css']);
  gulp.watch('./assets/js/**/*.js', ['js']);
  gulp.watch('./assets/images/**/*.+(png|jpg|gif|svg)', ['img']);
  gulp.watch('./assets/fonts/**/*.(ttf|woff|eof|svg)', ['fonts']);
});

// Browser Synchronization
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './dist/'
    },
  })
});

// Default Task
gulp.task('default', ['html', 'css', 'js', 'img', 'fonts','browserSync', 'watch']);
