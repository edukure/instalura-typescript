module.exports = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['<rootDir>/node_modules', 'node_modules'],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/cypress/',
    '<rootDir>/dist/',
  ],
  testEnvironment: 'jest-environment-jsdom',
  // globalSetup: '<rootDir>/test.env.js',
};
