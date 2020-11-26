import { Component, Prop, Vue } from 'vue-property-decorator';
import {
  VBtn,
  VIcon,
  VNavigationDrawer,
  VDialog,
  VCol,
  VRow,
} from 'vuetify/lib';
import './UtNavigationDrawer.scss';

export interface NavigationDrawerToggleOptions {
  icon?: string;
  color?: string;
  dark?: boolean;
}

@Component({
  name: 'ut-navigation-drawer',
  components: {
    VBtn,
    VIcon,
    VNavigationDrawer,
    VDialog,
    VCol,
    VRow,
  },
  computed: {
    drawer: {
      get() {
        if (this.$vuetify.breakpoint.mdOnly) {
          return (this as UtNavigationDrawer).value;
        }
        return true;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
  template: `
    <v-navigation-drawer
      v-if="!$vuetify.breakpoint.smAndDown"
      class="ut-navigation-drawer"
      app
      clipped
      left
      v-model="drawer"
      :mini-variant="!value && $vuetify.breakpoint.lgAndUp"
      mini-variant-width="30"
      >
      <div class="d-flex ut-navigation-drawer__header pa-5 align-center mt-5">
        <span :style="{visibility: value ? 'visible' : 'hidden'}">{{title}}</span>
        <v-btn
          v-if="toggleOptions.icon"
          class="ut-navigation-drawer__toggle"
          :color="toggleOptions.color"
          :dark="toggleOptions.dark"
          fab
          small
          elevation="0"
          :ripple="false"
          @click.stop="toggleDrawer"
        >
          <v-icon>{{toggleOptions.icon}}</v-icon>
        </v-btn>
      </div>
      <div
        class="ut-navigation-drawer__content"
        :style="{visibility: value ? 'visible' : 'hidden'}"
      >
        <slot />
      </div>
    </v-navigation-drawer>
    <v-dialog
      v-model="value"
      v-else
      fullscreen
      hide-overlay
      transition="scroll-x-transition"
    >
      <div class="pa-5 ut-navigation-drawer--dialog__content">
        <v-row class="ut-navigation-drawer--dialog__header align-center" no-gutters>
          <v-col cols="4"></v-col>
          <v-col cols="4" class="text-center">{{ title }}</v-col>
          <v-col cols="4"  class="text-right">
            <v-btn icon @click="closeDialog">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-col>
        </v-row>
        <slot />
      </div>
    </v-dialog>
  `,
})
export default class UtNavigationDrawer extends Vue {
  @Prop({
    type: Object,
    required: false,
    default: () => ({
      icon: undefined,
      color: '#f0f0f0',
      dark: false,
    }),
  }) toggleOptions!: NavigationDrawerToggleOptions;

  @Prop({
    type: Boolean,
    required: false,
    default: false,
  }) value!: boolean;

  // @Prop({
  //   type: Boolean,
  //   required: false,
  //   default: false,
  // }) navigationBar!: boolean;

  // @Prop({
  //   type: Boolean,
  //   required: false,
  //   default: true,
  // }) appBar!: boolean;

  @Prop({
    type: String,
    required: true,
  }) title!: string;

  onDrawerInput(value: boolean) {
    this.$emit('input', value);
  }

  toggleDrawer() {
    this.$emit('input', !this.value);
  }

  closeDialog() {
    this.$emit('input', false);
  }
}
