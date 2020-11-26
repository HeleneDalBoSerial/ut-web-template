import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

addons.setConfig({
  theme: create({
    brandTitle: 'Ugitech',
    brandUrl: 'https://www.ugitech.com/home/',
    brandImage: './ugitech-logo.png'
  }),
});
