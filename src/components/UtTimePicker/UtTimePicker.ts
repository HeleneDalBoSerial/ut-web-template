import {
  Component, Vue, Prop,
} from 'vue-property-decorator';
import {
  VRow,
  VCol,
  VBtn,
} from 'vuetify/lib';
import UtTimePickerHeader from './UtTimePickerHeader';
import UtTimePickerCounter from './UtTimePickerCounter';
import {
  // eslint-disable-next-line no-unused-vars
  TimeComponent, timeRegex, dateToTimeString, timeToString, decomposeTime,
} from './utils';
import './UtTimePicker.scss';

@Component({
  name: 'ut-time-picker',
  components: {
    UtTimePickerCounter,
    UtTimePickerHeader,
    VRow,
    VCol,
    VBtn,
  },
  template: `
  <div class="ut-time-picker pb-4">
    <v-row
      class="px-7 pt-4"
      no-gutters
    >
      <v-col>
        <ut-time-picker-header />

        <v-row no-gutters>
          <ut-time-picker-counter
            class="ut-time-input__separator"
            :value="decomposedTime.hours"
            @add="add('hours')"
            @subtract="subtract('hours')"
            @change="change('hours', $event)"
          />
          <ut-time-picker-counter
            :value="decomposedTime.minutes"
            class="ut-time-input__separator"
            @add="add('minutes')"
            @subtract="subtract('minutes')"
            @change="change('minutes', $event)"
          />
          <ut-time-picker-counter
            :value="decomposedTime.seconds"
            @add="add('seconds')"
            @subtract="subtract('seconds')"
            @change="change('seconds', $event)"
          />
        </v-row>

        <v-row justify="center">
          <v-btn
            outlined
            color="primary"
            class="mt-3 ut-btn ut-btn--outlined"
            @click="now"
          >
            Maintenant
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
    <v-row class="mt-7">
      <slot />
    </v-row>
  </div>
  `,
})
export default class UtTimePicker extends Vue {
  @Prop({
    type: String,
    required: true,
    validator(value: string) {
      return timeRegex.test(value);
    },
  }) value!: string;

  get decomposedTime() {
    return decomposeTime(this.value as string);
  }

  now() {
    this.$emit('input', dateToTimeString(Date.now()));
  }

  add(timeComponent: TimeComponent) {
    const { decomposedTime } = this;
    this.$emit('input', timeToString({
      ...decomposedTime,
      [timeComponent]: parseInt(decomposedTime[timeComponent], 10) + 1,
    }));
  }

  subtract(timeComponent: TimeComponent) {
    const { decomposedTime } = this;
    this.$emit('input', timeToString({
      ...decomposedTime,
      [timeComponent]: parseInt(decomposedTime[timeComponent], 10) - 1,
    }));
  }

  change(timeComponent: TimeComponent, value: number) {
    const { decomposedTime } = this;
    this.$emit('input', timeToString({
      ...decomposedTime,
      [timeComponent]: value,
    }));
  }
}
