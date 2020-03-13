module.exports = {
  entry: {
    main: './src/ThingWithTimers.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      },
    ]
  }
}
