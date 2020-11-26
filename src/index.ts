import { UtNavigationBar } from './components/UtNavigationBar';
import { UtTimePicker } from './components/UtTimePicker';
import { UtAppMenu } from './components/UtAppMenu';
import { UtDatetimePicker } from './components/UtDatetimePicker';
import { UtAppBar } from './components/UtAppBar';
import { UtNavigationDrawer } from './components/UtNavigationDrawer';
import { UtConnectionLayout } from './components/UtConnectionLayout';
import '@mdi/font/css/materialdesignicons.css';

const install = (Vue: any) => {
  Vue.component('ut-app-bar', UtAppBar);
  Vue.component('ut-app-menu', UtAppMenu);
  Vue.component('ut-datetime-picker', UtDatetimePicker);
  Vue.component('ut-time-picker', UtTimePicker);
  Vue.component('ut-navigation-bar', UtNavigationBar);
  Vue.component('ut-navigation-drawer', UtNavigationDrawer);
  Vue.component('ut-connection-layout', UtConnectionLayout);
};

export {
  UtAppBar,
  UtAppMenu,
  UtDatetimePicker,
  UtTimePicker,
  UtNavigationBar,
  UtNavigationDrawer,
  UtConnectionLayout,
};

export default install;
