module.exports = {
  name: 'test-publishable',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/test-publishable',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
