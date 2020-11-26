import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import {
  VRow,
  VCol,
  VBtn,
  VIcon,
  VSpacer,
} from 'vuetify/lib';
import './UtNavigationBar.scss';

export interface UtNavigationBarButton {
  show: boolean;
}
export interface UtNavigationBarOptions {
  actions: {
    home: UtNavigationBarButton;
    refresh: UtNavigationBarButton;
    next: UtNavigationBarButton;
    back: UtNavigationBarButton;
    close: UtNavigationBarButton;
  }
}

@Component({
  name: 'ut-navigation-bar',
  components: {
    VRow,
    VCol,
    VBtn,
    VIcon,
    VSpacer,
  },
  template: `
  <v-row
    no-gutters
    class="ut-navigation-bar align-center"
  >
    <div class="d-flex justify-start">
      <v-btn
        text
        v-if="options.buttons.back.show"
        @click="back"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn
        text
        v-if="options.buttons.next.show"
        @click="next"
      >
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-btn
        text
        v-if="options.buttons.home.show"
        @click="home"
      >
        <v-icon>mdi-home</v-icon>
      </v-btn>
      <v-btn
        text
        v-if="options.buttons.refresh.show"
        @click="refresh"
      >
        <v-icon>mdi-refresh</v-icon>
      </v-btn>
      <v-btn
        text
        v-if="$vuetify.breakpoint.xsOnly && options.buttons.close.show"
        @click="close()"
        class="ut-navigation-bar__close-btn--xs-only"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </div>
    <v-spacer />
    <div v-if="$vuetify.breakpoint.smAndUp" class="d-flex justify-end">
      <v-btn
        text
        v-if="options.buttons.close.show"
        @click="close()"
      >
        <v-icon>mdi-close</v-icon>
        <span v-if="$vuetify.breakpoint.mdAndUp">Fermer</span>
      </v-btn>
    </div>
  </v-row>
  `,
})
export default class UtNavigationBar extends Vue {
  @Prop({
    type: Object,
    required: false,
    default: () => ({
      buttons: {
        home: { show: true },
        refresh: { show: true },
        back: { show: true },
        next: { show: true },
        close: { show: true },
      },
    }),
  }) options!: UtNavigationBarOptions;

  public back() {
    this.$emit('back');
  }

  public next() {
    this.$emit('next');
  }

  public home() {
    this.$emit('home');
  }

  public refresh() {
    this.$emit('refresh');
  }

  public close() {
    this.$emit('close');
  }
}
