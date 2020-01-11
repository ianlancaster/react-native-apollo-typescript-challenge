module.exports = {
  preset: 'react-native',
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?' +
    'react-native' +
    '|react-clone-referenced-element' +
    '|expo(nent)?' +
    '|@expo(nent)?/.*' +
    '|react-navigation' +
    '|@react-navigation/.*' +
    '|native-base' +
    '|@react-native-community/masked-view))',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'json',
    'node',
  ],
  setupFiles: ['./jest.setup.js'],
}
