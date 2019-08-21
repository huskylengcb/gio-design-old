const { src, dest, parallel } = require('gulp');
const yaml = require('gulp-yaml');
const replace = require('gulp-replace');
const rename = require('gulp-rename');

function less() {
  return src('./src/*.yml')
    .pipe(yaml())
    .pipe(replace(/"(\S*":)/, '"@$1'))
    .pipe(rename({ suffix: '-less' }))
    .pipe(dest('lib'))
}

exports.default = parallel(less);