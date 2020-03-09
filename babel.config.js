module.exports = api => {
  api.cache(false)
  return ({
    presets: [
      [
        '@babel/env',
        {
          modules: 'commonjs',
          debug: false,
          targets: {
            node: 'current',
          },
        },
      ],
    ],
    plugins: [
      [
        '@babel/plugin-transform-runtime',
        {
          absoluteRuntime: true,
          corejs: '3',
          helpers: true,
          regenerator: true,
          useESModules: false,
        },
      ],
    ],
  })
}
