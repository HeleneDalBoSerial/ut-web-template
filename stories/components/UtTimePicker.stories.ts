import { UtTimePicker } from '@/components/UtTimePicker';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Design System/Composants/UtTimePicker',
  component: UtTimePicker,
};

export const basique = () => ({
  components: { UtTimePicker },
  template: '<ut-time-picker v-model="time" @input="change"/>',
  data: () => ({ time: '12:30:45' }),
  methods: {
    change: action('change'),
  },
});
