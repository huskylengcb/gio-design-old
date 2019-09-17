const fs = require('fs');
const { src, dest, parallel, series } = require('gulp');
const theo = require('gulp-theo');
const handlebars = require('handlebars');

const sources = ['src/tokens/*.yml', '!src/tokens/palette.yml'];
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

const entries = [
  { src: 'src/index.js.hbs', dest: 'index.js' },
  { src: 'src/index.less.hbs', dest: 'dist/index.less' }
];
function generateEntry(done) {
  let tokenList = [];
  if (fs.existsSync(dist)) {
    const tokenFiles = fs.readdirSync(dist);
    tokenList = tokenFiles.reduce((tl, file) => {
      if (/\.common\.js$/.test(file)) {
        const tokenSet = file.slice(0, file.indexOf('.'));
        return [...tl, tokenSet];
      }
      return tl;
    }, [])
  }

  entries.forEach((entry) => {
    const templateFile = fs.readFileSync(entry.src, 'utf-8');
    const template = handlebars.compile(templateFile);
    fs.writeFileSync(entry.dest, template({ tokenList }));
  })

  done();
}

exports.default = series(parallel(less, commonJS, json), generateEntry);
