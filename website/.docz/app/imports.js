export const imports = {
  'src/index.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-index" */ 'src/index.mdx'),
  'src/components/home.mdx': () =>
    import(/* webpackPrefetch: true, webpackChunkName: "src-components-home" */ 'src/components/home.mdx'),
}
