const { src, dest, series, watch } = require('gulp')
const clean = require('gulp-clean')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')
const browserSync = require('browser-sync')

/**
 * clean compiled files
 */
function cleanDist() {
  return src('dist', { allowEmpty: true }).pipe(clean())
}
/**
 * Clean JS files
 */
function cleanJs() {
  return src('dist/**/*.js', { allowEmpty: true }).pipe(clean())
}

function build() {
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(dest('dist'))
    .pipe(browserSync.stream())
}

exports.build = series(cleanDist, build)

exports.default = function() {
  browserSync.init({
    server: '.'
  })
  watch('src/**/*.ts', { ignoreInitial: false }, series(cleanJs, build))
  watch('./**/*.html').on('change', browserSync.reload)
}

exports.cleanJs = cleanJs
