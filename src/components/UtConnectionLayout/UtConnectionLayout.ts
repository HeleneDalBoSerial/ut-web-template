import { Component, Vue } from 'vue-property-decorator';
import {
  VCol,
  VRow,
} from 'vuetify/lib';
import ugitechLogo from '../../assets/ugitech+byline.svg';
import './UtConnectionLayout.scss';

@Component({
  name: 'ut-connection-layout',
  components: {
    VCol,
    VRow,
  },
  template: `
  <v-row class="fill-height ut-connection-page">
    <v-col class="ut-connection-page__fill d-none d-sm-none d-md-flex" md="3">
    </v-col>
    <v-col class="text-center" cols="12" md="9">
      <div class="ut-connection-page__logo">
        <img :src="src"/>
      </div>
      <v-row align="center" justify="center" class="ut-connection-page__form">
        <slot></slot>
      </v-row>
    </v-col>
  </v-row>
  `,
})
export default class UtConnectionLayout extends Vue {
  src: string = ugitechLogo
}
