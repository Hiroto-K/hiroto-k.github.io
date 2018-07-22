gulp   = require("gulp")
config = require("../config")
$      = config.plugins
isProduction = config.isProduction

browserify = require('browserify')
vueify = require('vueify')
babelify = require('babelify')
source = require('vinyl-source-stream')
buffer = require('vinyl-buffer')
envify = require('envify/custom')

gulp.task("compile", ["compile:vue", "compile:scss"])

gulp.task "compile:vue", ->
  b = browserify(config.src.vue, {
    debug: true,
    extensions: ['.js', '.vue'],
    transform: [
      vueify,
      babelify
    ]
  })

  if isProduction
    b = b.transform(
      { global: true },
      envify({ NODE_ENV: 'production' })
    )

  b.bundle()
    .on("error", (err) ->
      console.log(err.message)
      console.log(err.stack)
    )
    .pipe($.plumber())
    .pipe(source(config.dist.vue))
    .pipe(buffer())
    .pipe($.if(!isProduction, $.sourcemaps.init()))
    .pipe($.if(isProduction, $.uglify()))
    .pipe($.if(!isProduction, $.sourcemaps.write(config.map)))
    .pipe(gulp.dest(config.dist.js));

gulp.task "compile:scss", ->
  gulp
    .src(config.src.scss)
    .pipe($.plumber())
    .pipe($.if(!isProduction, $.sourcemaps.init()))
    .pipe($.sass({outputStyle: 'expanded'})
    .on('error', $.sass.logError))
    .pipe($.if(isProduction, $.cssmin()))
    .pipe($.if(!isProduction, $.sourcemaps.write(config.map)))
    .pipe(gulp.dest(config.dist.css))
