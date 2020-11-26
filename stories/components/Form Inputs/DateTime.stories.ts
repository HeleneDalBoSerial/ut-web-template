import { VTextField } from 'vuetify/lib';
import { UtDatetimePicker } from '@/components/UtDatetimePicker';
import moment from 'moment';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Design System/Composants/Formulaire/DateTime',
  component: UtDatetimePicker,
  decorators: [() => ({
    template: `
    <v-row class="pa-5">
      <v-col cols="4">
        <story/>
      </v-col>
    </v-row>
    `,
  })],
};


export const menu = () => ({
  components: { UtDatetimePicker, VTextField },
  template: `
      <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="290px"
        height="290px"
      >
        <template v-slot:activator="obj">
          <v-text-field
            v-model="formatedDateTime"
            label="Choix de date"
            append-icon="mdi-calendar"
            readonly
            filled
            v-on="obj.on"
          ></v-text-field>
        </template>
        <div
          v-if="menu2"
          full-width
          class="d-flex justify-center"
        >
          <ut-datetime-picker v-model="datetime" @input="change">
            <v-spacer></v-spacer>
            <div class="d-flex justify-end pa-2">
              <v-btn text color="primary" @click="menu2 = false">Fermer</v-btn>
            </div>
          </ut-datetime-picker>
        </div>
      </v-menu>
  `,
  data: () => ({
    datetime: new Date(),
    menu2: false,
  }),
  computed: {
    formatedDateTime() {
      return moment(this.datetime).format('YYYY-MM-DD à HH:mm:ss');
    },
  },
  methods: {
    change: action('change'),
  },
});

export const modal = () => ({
  components: { UtDatetimePicker, VTextField },
  template: `
      <v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="datetime"
        persistent
        width="290px"
      >
        <template v-slot:activator="obj">
          <v-text-field
            v-model="formatedDateTime"
            label="Choix de date"
            append-icon="mdi-calendar"
            readonly
            filled
            v-on="obj.on"
          ></v-text-field>
        </template>
        <div
          v-if="modal2"
          full-width
          class="d-flex justify-center"
        >
          <ut-datetime-picker v-model="datetime" @input="change">
            <v-spacer></v-spacer>
            <div class="d-flex justify-end pa-2">
              <v-btn text color="primary" @click="modal2 = false">Annuler</v-btn>
              <v-btn text color="primary" @click="$refs.dialog.save(datetime)">OK</v-btn>
            </div>
          </ut-datetime-picker>
        </div>
      </v-dialog>
  `,
  data: () => ({
    datetime: new Date(),
    modal2: false,
  }),
  computed: {
    formatedDateTime() {
      return moment(this.datetime).format('YYYY-MM-DD à HH:mm:ss');
    },
  },
  methods: {
    change: action('change'),
  },
});
