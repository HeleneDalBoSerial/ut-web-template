import { UtNavigationBar } from '@/components/UtNavigationBar';
import { action } from '@storybook/addon-actions';
import vuetifyConfig from '@/plugins/vuetify';
import { VBtn, VSwitch } from 'vuetify/lib';

export default {
  title: 'Design System/Composants/Layout/UtNavigationBar',
  component: UtNavigationBar,
};

export const basique = () => ({
  vuetify: vuetifyConfig,
  components: { UtNavigationBar, VBtn },
  template: `
  <div>
    <ut-navigation-bar
      v-if="showNavigationBar"
      @close="close"
      @back="back"
      @next="next"
      @refresh="refresh"
      @home="home"
    />
    <div class="text-center pa-10 mt-10">
      <v-btn v-if="!showNavigationBar" @click="open">Ouvrir</v-btn>
      <v-btn v-else @click="close">Fermer</v-btn>
    </div>
  </div>
  `,
  methods: {
    open() {
      this.openAction();
      this.showNavigationBar = true;
    },
    close() {
      this.closeAction();
      this.showNavigationBar = false;
    },
    closeAction: action('close'),
    openAction: action('open'),
    back: action('back'),
    next: action('next'),
    refresh: action('refresh'),
    home: action('home'),
  },
  data: () => ({
    showNavigationBar: true,
  }),
});

export const personnalisé = () => ({
  vuetify: vuetifyConfig,
  components: { UtNavigationBar, VSwitch },
  template: `
  <div>
    <ut-navigation-bar :options="options"/>
    <div class="text-center pa-10 mt-10">
      <v-switch
        v-for="(value, key) in options.buttons"
        :key="key"
        v-model="value.show"
        class="mr-5"
        :label="key"
      >
      </v-switch>
    </div>
  </div>
  `,
  data: () => ({
    options: {
      buttons: {
        home: { show: true },
        refresh: { show: true },
        back: { show: false },
        next: { show: false },
        close: { show: true },
      },
    },
  }),
});
