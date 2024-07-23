const path = require('path');

module.exports = {
  mode: 'production',
  target: 'node', 
  entry: './app.js', 
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // Additional configuration goes here
};