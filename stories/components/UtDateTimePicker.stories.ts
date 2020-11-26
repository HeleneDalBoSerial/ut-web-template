import { action } from '@storybook/addon-actions';
import { UtDatetimePicker } from '@/components/UtDatetimePicker';

export default {
  title: 'Design System/Composants/UtDatetimePicker',
  component: UtDatetimePicker,
};

export const basique = () => ({
  components: { UtDatetimePicker },
  template: '<ut-datetime-picker v-model="datetime" @input="change" />',
  data: () => ({ datetime: new Date('03/20/2013 12:30:45') }),
  methods: {
    change: action('change'),
  },
});
