const { task, src, dest } = require('gulp');

function copyLess() {
  // return src('src/components/**/*.less')
  //  .pipe(dest('lib/'))
  return src('src/components/input/input.less')
    .pipe(dest('lib/input'))
    .pipe(dest('build/components/input'))
}

exports.default = copyLess;
