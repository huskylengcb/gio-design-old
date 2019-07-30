import { css } from 'docz-plugin-css';

module.exports = {
  title: 'Docz Typescript',
  typescript: true,
  src: '../src',
  menu: [
    '快速开始',
    // '模块定义',
    // '路由状态',
    // '权限',
    { name: 'GIODesign', menu: ['giodesign/tag', 'giodesign/checkbox'] }
    // 'GIOChart',
    // 'GIOCore',
    // 'Middleware',
    // 'Hooks'
  ],
  plugins: [
    css({ preprocessor: 'postcss' }),
    css({ 
      preprocessor: 'less',
      loaderOpts: { javascriptEnabled: true } 
    })
  ]
}