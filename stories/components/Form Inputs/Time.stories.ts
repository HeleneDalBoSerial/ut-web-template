import { VTextField } from 'vuetify/lib';
import { UtTimePicker } from '@/components/UtTimePicker';
import moment from 'moment';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Design System/Composants/Formulaire/Time',
  component: UtTimePicker,
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
  components: { UtTimePicker, VTextField },
  template: `
      <v-menu
        ref="menu"
        v-model="menu2"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        max-width="250px"
        height="253px"
      >
        <template v-slot:activator="obj">
          <v-text-field
            v-model="time"
            label="Choix d'heure"
            append-icon="mdi-clock-outline"
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
          <ut-time-picker v-model="time" @input="change">
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="menu2 = false">Fermer</v-btn>
          </ut-time-picker>
        </div>
      </v-menu>
  `,
  data: () => ({
    time: moment(Date.now()).format('HH:mm:ss'),
    menu2: false,
  }),
  methods: {
    change: action('change'),
  },
});

export const modal = () => ({
  components: { UtTimePicker, VTextField },
  template: `
      <v-dialog
        ref="dialog"
        v-model="modal2"
        :return-value.sync="time"
        persistent
        width="250px"
      >
        <template v-slot:activator="obj">
          <v-text-field
            v-model="time"
            label="Choix d'heure"
            append-icon="mdi-clock-outline"
            readonly
            filled
            v-on="obj.on"
          ></v-text-field>
        </template>
        <div
          v-if="modal2"
          full-width
          class="d-flex justify-center"
          style="background-color: white"
        >
          <ut-time-picker v-model="time" @input="change">
            <v-spacer></v-spacer>
            <v-btn text color="primary" @click="modal2 = false">Annuler</v-btn>
            <v-btn text color="primary" @click="$refs.dialog.save(time)">OK</v-btn>
          </ut-time-picker>
        </div>
      </v-dialog>
  `,
  data: () => ({
    time: moment(Date.now()).format('HH:mm:ss'),
    modal2: false,
  }),
  methods: {
    change: action('change'),
  },
});
