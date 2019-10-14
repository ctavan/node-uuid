const presets = [];
const plugins = [
  '@babel/plugin-transform-block-scoping',
];

if (process.env.TARGET !== 'esm') {
  plugins.push('@babel/plugin-transform-modules-commonjs');
  plugins.push('babel-plugin-add-module-exports');
  presets.push(['@babel/preset-env', {
    targets: {
      node: '8'
    },
  }]);
}

module.exports = {
  presets,
  plugins,
};
