/* eslint-disable no-useless-escape */
import { VIcon, VCol, VBtn } from 'vuetify/lib';
import Vue from 'vue';
import { formatNumber } from './utils';
import './UtTimePickerCounter.scss';

export default Vue.extend({
  name: 'ut-time-picker-counter',
  components: {
    VCol,
    VBtn,
    VIcon,
  },
  props: {
    value: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    inputValue: '',
  }),
  watch: {
    value(newVal) {
      this.inputValue = formatNumber(newVal);
    },
  },
  created() {
    this.inputValue = formatNumber(this.value);
  },
  methods: {
    add() {
      this.$emit('add');
    },
    subtract() {
      this.$emit('subtract');
    },
    change({ target }: any) {
      if (/\d?\d/.test(target.value)) {
        this.$emit('change', parseInt(target.value, 10));
      } else {
        this.inputValue = formatNumber(this.value);
      }
    },
  },
  template: `
  <v-col
    cols="4"
    class="ut-time-picker__counter"
  >
    <div class="d-flex justify-center">
      <v-btn
        tabindex="-1"
        icon
        @click="add"
      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </div>
    <div class="d-flex justify-center">
      <input
        v-model="inputValue"
        size="2"
        maxlength="2"
        type="text"
        pattern="[0-9]?[0-9]"
        @change="change"
      >
    </div>
    <div class="d-flex justify-center">
      <v-btn
        tabindex="-1"
        icon
        @click="subtract"
      >
        <v-icon>mdi-chevron-down</v-icon>
      </v-btn>
    </div>
  </v-col>
  `,
});
