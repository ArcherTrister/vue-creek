var path = require('path');
var fs = require('fs');
var nodeExternals = require('webpack-node-externals');
var Components = require('../components.json');

var transitionList = fs.readdirSync(
  path.resolve(__dirname, '../src/transitions')
);
var externals = {};

Object.keys(Components).forEach(function(key) {
  externals[`vue-tiny/packages/${key}`] = `vue-tiny/lib/${key}`;
});

externals['vue-tiny/src/locale'] = 'vue-tiny/lib/locale';

transitionList.forEach(function(file) {
  file = path.basename(file, '.js');
  externals[
    `vue-tiny/src/transitions/${file}`
  ] = `vue-tiny/lib/transitions/${file}`;
});

externals = [
  Object.assign(
    {
      vue: 'vue'
    },
    externals
  ),
  nodeExternals()
];

exports.externals = externals;

exports.alias = {
  main: path.resolve(__dirname, '../src'),
  packages: path.resolve(__dirname, '../packages'),
  examples: path.resolve(__dirname, '../examples'),
  'vue-tiny': path.resolve(__dirname, '../')
};

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
};

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date.\js/;
