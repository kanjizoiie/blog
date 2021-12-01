module.exports = {
  preset: 'ts-jest',
  setupFiles: ['<rootDir>/src/test/setup.ts'],
  snapshotSerializers: [
    'enzyme-to-json',
  ],
  modulePaths: ['/shared/vendor/modules'],
  moduleDirectories: ['node_modules'],
  moduleNameMapper: {
    '\\.(css|scss|less)$': '<rootDir>/__mocks__/styleMock.js',
    '\\.(gif|ttf|eot|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
};
