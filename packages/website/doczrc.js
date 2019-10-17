import { css } from 'docz-plugin-css';

module.exports = {
  title: 'GrowingIO Design System',
  typescript: true,
  src: './src',
  menu: [
    'Overview',
    'Getting Started',
    'Design Language',
    'Design Tokens',
    'Themes',
    'Icons',
    'Components',
    'Changelog'
  ],
  plugins: [
    css({ preprocessor: 'postcss' }),
    css({ 
      preprocessor: 'less',
      loaderOpts: { javascriptEnabled: true } 
    })
  ]
}
