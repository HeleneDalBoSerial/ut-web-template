const env = process.env.NODE_ENV;

module.exports = {
  presets: [
    [
      '@vue/cli-plugin-babel/preset',
      {
        /* Disabled due to clash with Storybook MDX */
        jsx: false,
        useBuiltIns: ['lib'].includes(env) ? false : 'usage',
      },
    ],
  ],
  plugins: [],
};

if (['lib'].includes(env)) {
  module.exports.plugins.push('./build/babel-transform-sass-paths.js');
  module.exports.plugins.push('./build/babel-transform-asset-paths.js');
}
