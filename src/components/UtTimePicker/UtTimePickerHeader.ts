import { VRow, VCol } from 'vuetify/lib';
import './UtTimePickerHeader.scss';

export default {
  name: 'ut-time-picker-header',
  components: {
    VRow,
    VCol,
  },
  template: `
  <v-row
    class="ut-time-picker__header"
    no-gutters
  >
    <v-col
      cols="4"
      class="text-center pb-0"
    >
      <span>H</span>
    </v-col>
    <v-col
      cols="4"
      class="text-center pb-0"
    >
      <span>Min</span>
    </v-col>
    <v-col
      cols="4"
      class="text-center pb-0"
    >
      <span>Sec</span>
    </v-col>
  </v-row>
  `,
};
