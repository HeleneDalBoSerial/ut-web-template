const path = require('path')

module.exports = {
  stories: [
    '../stories/doc/**/*.stories.(ts|mdx)',
    '../stories/components/**/*.stories.(ts|mdx)',
    '../stories/demo/**/*.stories.(ts|mdx)'
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links/register',
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs',
    {
      name: '@storybook/preset-typescript',
    }
  ],
};
