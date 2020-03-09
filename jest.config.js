module.exports = {
  testMatch: [
    '**/*.test.js',
  ],
  roots: ['<rootDir>/src'],
  transform: {'^.+\\.[t|j]sx?$': '<rootDir>/js/testing/babelizer.js'},
  verbose: true
}
