
import vuetifyConfig from '@/plugins/vuetify';
import {
  VApp, VContent, VContainer, VBtn, VTextField,
} from 'vuetify/lib';
import { UtNavigationBar } from '@/components/UtNavigationBar';
import { UtAppBar } from '@/components/UtAppBar';
import { UtNavigationDrawer } from '@/components/UtNavigationDrawer';
import { UtConnectionLayout } from '@/components/UtConnectionLayout';

const component = {
  vuetify: vuetifyConfig,
  components: {
    UtNavigationBar,
    UtAppBar,
    UtNavigationDrawer,
    UtConnectionLayout,
    VBtn,
    VApp,
    VContainer,
    VContent,
    VTextField,
  },
  template: `
  <v-app :class="{ 'ut-app--navigation-bar': navigationBar }">
    <ut-navigation-bar>
    </ut-navigation-bar>
    <ut-app-bar
      dark
      :items="menuItems"
      website="Nom du site"
      page="Titre de page 3"
      :username="username"
      @logout="logout"
    />
    <ut-navigation-drawer
      v-model="drawer"
      title="Titre"
      :toggle-options="{ icon: 'mdi-filter-variant' }"
    >
      <div class="pa-4">
        REMPLIR AVEC VOTRE CONTENU
      </div>
    </ut-navigation-drawer>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <div>REMPLIR AVEC VOTRE CONTENU</div>
        <v-btn
          fab
          v-if="$vuetify.breakpoint.mdAndDown"
          @click="drawer = !drawer"
          class="ut-navigation-drawer__float-button"
        >
          <v-icon>mdi-filter-variant</v-icon>
        </v-btn>
      </v-container>
    </v-content>
    <ut-connection-layout v-if="showConnection" style="z-index: 300; position: fixed; top: 0; left: 0; right: 0; bottom: 0;">
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
        </div>
        <div class="text-right mt-5">
          <v-btn
            :ripple="false"
            color="primary"
            @click="submit"
          >Connexion</v-btn>
        </div>
      </fStoryorm>
    </ut-connection-layout>
  </v-app>
  `,
  data: () => ({
    showConnection: true,
    showPassword: false,
    password: '',
    email: '',
    drawer: true,
    username: 'Gabriel Vautrin',
    navigationBar: true,
    menuItems: [
      {
        title: 'Applications',
        color: '#99CD50',
        iStorycon: 'mdi-wrench',
        type: 'app',
      },
      {
        title: 'Ged-archive',
        color: '#6A969C',
        icon: 'mdi-package-down',
        type: 'app',
      },
      {
        title: 'Titre de page 1',
      },
      {
        title: 'Titre de page 2',
      },
      {
        title: 'Ensemble de pages 1',
        items: [
          {
            title: 'Titre de page 3',
            disabled: true,
          },
          {
            title: 'Titre de page 4',
          },
        ],
      },
      {
        title: 'Titre de page 5',
      },
    ],
  }),
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    submit() {
      this.showConnection = false;
    },
    logout() {
      this.showConnection = true;
    },
  },
};

export default component;
