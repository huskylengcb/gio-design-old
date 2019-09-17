const { task, src, dest } = require('gulp');

function copyLess() {
  // return src('src/components/**/*.less')
  //  .pipe(dest('lib/'))
  return src([
    'src/components/input/input.less',
    'src/components/button/button.less'
  ], { base: 'src/components'})
    .pipe(dest('lib'))
    .pipe(dest('build/components'))
}

exports.default = copyLess;
