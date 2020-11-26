const path = require('path');

module.exports = async ({ config }) => {
  const { rules } = config.module;

  rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('ts-loader'),
        options: {
          appendTsSuffixTo: [/\.vue$/],
          transpileOnly: true
        },
      },
    ],
  });

  rules.push({
    test: /\.sass$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'resolve-url-loader',
      {
        loader: 'sass-loader',
        // Requires sass-loader@^8.0.0
        options: {
          sassOptions: {
            fiber: require('fibers'),
            indentedSyntax: true
          },
          prependData: "@import '@/styles/variables.scss'"
        },
      },
    ],
  });

  rules.push({
    test: /\.scss$/,
    use: [
      'vue-style-loader',
      'css-loader',
      'resolve-url-loader',
      {
        loader: 'sass-loader',
        // Requires sass-loader@^8.0.0
        options: {
          sassOptions: {
            fiber: require('fibers'),
            indentedSyntax: false
          },
        },
      },
    ],
  });

  config.resolve.alias = {
    ...config.resolve.alias,
    '@': path.resolve(__dirname, '../src')
  }

  return config;
};
