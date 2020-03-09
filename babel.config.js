module.exports = () => ({
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
