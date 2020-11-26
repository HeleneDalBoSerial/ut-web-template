import { action } from '@storybook/addon-actions';
import {
  VApp,
  VTextField,
  VBtn,
} from 'vuetify/lib';
import { UtConnectionLayout } from '@/components/UtConnectionLayout';
import vuetifyConfig from '@/plugins/vuetify';

export default {
  title: 'Design System/Composants/Layout/UtConnectionLayout',
  parameters: {
    custom: {
      wrapWithVuetifyApp: false,
      fullHeight: true,
    },
  },
  component: UtConnectionLayout,
};

export const basique = () => ({
  vuetify: vuetifyConfig,
  components: {
    VTextField,
    VBtn,
    VApp,
    UtConnectionLayout,
  },
  template: `
  <v-app>
    <v-content>
      <ut-connection-layout>
        <form class="px-10 col-12 col-md-6">
          <div class="text-left title mb-4">
            <span class="text-no-wrap">Bienvenue sur</span>
            <span class="text-no-wrap">Nom du site</span>
          </div>
          <div class="display-2 text-left mb-6">Connexion</div>
          <div class="mt-5">
            <v-text-field
              v-model="email"
              label="Email"
              filled
              type="email"
              name="email"
            />
            <v-text-field
              v-model="password"
              label="Mot de passe"
              name="password"
              hide-details
              filled
              @click:append="togglePassword"
              :type="showPassword ? 'text' : 'password'"
              :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" />
            <div class="text-left mt-1">
              <a @click="forgottenPassword" href="#" class="caption">Mot de passe oublié ?</a>
            </div>
          </div>
          <div class="text-right mt-5">
            <v-btn
              :ripple="false"
              color="primary"
              @click="submit"
            >Connexion</v-btn>
          </div>
        </form>
      </ut-connection-layout>
    </v-content>
  </v-app>
  `,
  data: () => ({
    showPassword: false,
    password: '',
    email: '',
  }),
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    forgottenPassword: action('forgottenPassword'),
    submit() {
      this.submitAction({
        password: this.password,
        email: this.email,
      });
    },
    submitAction: action('submit'),
  },
});
