module.exports = {
  testMatch: [
    '**/*.test.js',
  ],
  roots: ['<rootDir>/src'],
  transform: {'^.+\\.js$': '<rootDir>/testenv/babelizer.js'},
  verbose: true
}
