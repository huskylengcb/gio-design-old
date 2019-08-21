const { src, dest, parallel } = require('gulp');
const theo = require('gulp-theo');

const sources = ['tokens/*.yml', '!tokens/palette.yml'];
const getWebConfig = (format = 'less') => {
  return {
    transform: { type: 'web' },
    format: { type: format }
  }
};

const dist = 'dist';

function less() {
  return src(sources)
    .pipe(theo(getWebConfig()))
    .pipe(dest(dist))
}

function commonJS() {
  return src(sources)
    .pipe(theo(getWebConfig('common.js')))
    .pipe(dest(dist))
}

function json() {
  return src(sources)
    .pipe(theo(getWebConfig('json')))
    .pipe(dest(dist))
}

exports.default = parallel(less, commonJS, json);