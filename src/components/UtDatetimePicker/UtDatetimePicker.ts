import { Prop, Component, Vue } from 'vue-property-decorator';
import {
  VTabs,
  VTab,
  VIcon,
  VTabItem,
  VDatePicker,
} from 'vuetify/lib';
import moment from 'moment';
import { UtTimePicker } from '../UtTimePicker';
import { decomposeTime } from '../UtTimePicker/utils';
import './UtDatetimePicker.scss';

@Component({
  name: 'ut-datetime-picker',
  components: {
    UtTimePicker,
    VTabs,
    VTab,
    VIcon,
    VTabItem,
    VDatePicker,
  },
  template: `
  <div class="ut-datetime-picker">
    <v-tabs
      centered
      grow
    >
      <v-tab
        href="#date"
      >
        <v-icon>mdi-calendar</v-icon>
      </v-tab>
      <v-tab href="#time">
        <v-icon>mdi-clock-outline</v-icon>
      </v-tab>
      <v-tab-item value="date">
        <v-date-picker
          :value="date"
          no-title
          scrollable
          show-current="false"
          @input="onDateChange"
        />
      </v-tab-item>
      <v-tab-item value="time">
        <ut-time-picker
          :value="time"
          @input="onTimeChange"
        />
      </v-tab-item>
    </v-tabs>
    <div class="ut-datetime-picker__footer">
      <slot />
    </div>
  </div>
  `,
})
export default class UtDatetimePicker extends Vue {
  @Prop({
    type: Date,
    required: true,
  }) value!: Date;

  get momentObj() {
    return moment(this.value);
  }

  get date(): string {
    const { momentObj } = this;
    return momentObj.clone().toISOString().substr(0, 10);
  }

  get time(): string {
    const { momentObj } = this;
    return `${momentObj.hours()}:${momentObj.minutes()}:${momentObj.seconds()}`;
  }

  onTimeChange(newValue: string) {
    const { hours, seconds, minutes } = decomposeTime(newValue);
    const { momentObj } = this;
    this.$emit('input', momentObj.hours(parseInt(hours, 10))
      .minutes(parseInt(minutes, 10))
      .seconds(parseInt(seconds, 10))
      .toDate());
  }

  onDateChange(newValue: string) {
    const { momentObj } = this;
    this.$emit('input', moment(newValue)
      .hours(momentObj.hours())
      .minutes(momentObj.minutes())
      .seconds(momentObj.seconds())
      .toDate());
  }
}
