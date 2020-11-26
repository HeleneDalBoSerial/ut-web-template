import { addDecorator, addParameters } from '@storybook/vue';
import Vue from 'vue';
import './stories.scss';
import vuetify from '@/plugins/vuetify';
import '@mdi/font/css/materialdesignicons.css';
import Vuetify, {
  VApp,
  VAppBar,
  VAppBarNavIcon,
  VBtn,
  VCard,
  VCardText,
  VCol,
  VContainer,
  VContent,
  VDatePicker,
  VDialog,
  VDivider,
  VIcon,
  VImg,
  VList,
  VListItem,
  VListItemAvatar,
  VListItemContent,
  VListItemIcon,
  VListItemTitle,
  VListItemAction,
  VListGroup,
  VNavigationDrawer,
  VMenu,
  VRow,
  VSheet,
  VSnackbar,
  VSparkline,
  VSpacer,
  VSubheader,
  VTab,
  VTabs,
  VTabItem,
  VToolbar,
  VToolbarTitle,
  VTooltip,
  VLayout,
  Resize,
} from 'vuetify/lib';

Vue.use(Vuetify, {
  components: {
    VApp,
    VAppBar,
    VAppBarNavIcon,
    VBtn,
    VCard,
    VCardText,
    VCol,
    VContainer,
    VContent,
    VDatePicker,
    VDialog,
    VDivider,
    VIcon,
    VImg,
    VList,
    VListItem,
    VListItemAvatar,
    VListItemContent,
    VListItemIcon,
    VListItemTitle,
    VListItemAction,
    VListGroup,
    VMenu,
    VNavigationDrawer,
    VRow,
    VSheet,
    VSnackbar,
    VSparkline,
    VSpacer,
    VSubheader,
    VTab,
    VTabs,
    VTabItem,
    VToolbar,
    VToolbarTitle,
    VTooltip,
    VLayout,
  },
  directives: {
    Resize
  }
});

addParameters({
  options: {
    showRoots: true,
  },
  docs: {
    inlineStories: false,
  },
});

addDecorator((decoratedStory, story) => {
  let _wrapWithVuetifyApp = true;
  let _fullHeight = false;
  if (story.parameters.custom) {
    const { wrapWithVuetifyApp, fullHeight } = story.parameters.custom;
    if (wrapWithVuetifyApp !== undefined) {
      _wrapWithVuetifyApp = wrapWithVuetifyApp;
    }
    if (fullHeight !== undefined) {
      _fullHeight = fullHeight;
    }
  }
  if (_wrapWithVuetifyApp) {
    return {
      vuetify,
      components: { VApp },
      template: `
      <v-app class="${_fullHeight ? '' : 'min-height'}">
        <story/>
      </v-app>
    `,
    };
  }

  return '<story/>';
})
