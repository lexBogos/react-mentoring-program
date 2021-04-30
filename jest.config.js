'use strict';

module.exports = {
  collectCoverageFrom: ['app/**/*.js'],
  coveragePathIgnorePatterns: [],
  coverageReporters: ['lcov', 'text'],
//   coverageThreshold: {
//     global: {
//       branches: 80,
//       functions: 80,
//       lines: 80,
//       statements: 80,
//     },
//   },
  testPathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/*.test.js'],
  moduleFileExtensions: ['js', 'json'],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(scss|sass|css)$": "identity-obj-proxy"
  }
};
