module.exports = {
  name: 'main',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/main',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
