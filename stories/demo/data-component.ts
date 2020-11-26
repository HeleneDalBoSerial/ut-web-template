import { action } from '@storybook/addon-actions';
import {
  VApp,
  VSelect,
  VDataTable,
  VTooltip,
  VTextField,
} from 'vuetify/lib';
import moment from 'moment';
import vuetifyConfig from '@/plugins/vuetify';
import { UtNavigationBar } from '@/components/UtNavigationBar';
import { UtAppBar } from '@/components/UtAppBar';
import { UtNavigationDrawer } from '@/components/UtNavigationDrawer';
import appImg from '@/assets/LogoA2iUgitech_FullRes.png';

const component = {
  vuetify: vuetifyConfig,
  components: {
    UtAppBar,
    UtNavigationBar,
    UtNavigationDrawer,
    VApp,
    VSelect,
    VDataTable,
    VTooltip,
    VTextField,
  },
  template: `
  <v-app :class="{ 'ut-app--navigation-bar': navigationBar }">
    <ut-navigation-bar
      v-if="navigationBar"
      @close="close"
      @back="back"
      @next="next"
      @refresh="refresh"
      @home="home"
      @logout="logout"
    />
    <ut-app-bar
      dark
      :items="menuItems"
      website="Nom du site"
      page="Titre de page 3"
      username="Cyril Martinez"
    >
      <template v-slot:menuImg>
        <img :src="appImg" width="40"/>
      </template>
    </ut-app-bar>
    <ut-navigation-drawer
      v-model="drawer"
      title="Filtres"
      :toggle-options="{ icon: 'mdi-filter-variant' }"
    >
      <div class="pa-4">
        <v-select
          class="mt-5"
          :items="['Tous']"
          filled
          hide-details
          label="Types"
        />

        <v-select
          class="mt-5"
          :items="['Toutes', 'Connexion Web', 'Terminer Camion']"
          filled
          hide-details
          label="Fonctions"
        />

        <v-select
          class="mt-5"
          :items="['Toutes', 'Connexion Web', 'Terminer Camion']"
          filled
          hide-details
          multiple
          label="Clés"
        />

        <v-btn
          class="mt-5"
          :ripple="false"
          color="primary"
        >
          Appliquer
        </v-btn>
      </div>
    </ut-navigation-drawer>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-btn
          fab
          v-if="$vuetify.breakpoint.mdAndDown"
          @click="drawer = !drawer"
          class="ut-navigation-drawer__float-button"
        >
          <v-icon>mdi-filter-variant</v-icon>
        </v-btn>
        <v-row
          class="fill-height"
          no-gutters
        >
          <v-col
            cols="12"
            class="px-10 py-2"
          >
            <v-row class="mb-6 mt-3" align="center">
              <div class="display-1">
                Logs
              </div>
              <v-spacer />
              <div>
                <v-text-field
                  v-model="search"
                  filled
                  label="Rechercher"
                  append-icon="mdi-magnify"
                  hide-details
                  dense
                />
              </div>
            </v-row>
            <v-row class="mb-3">
              <v-btn outlined color="primary" class="ut-btn ut-btn--outlined">
                <v-icon>mdi-download</v-icon>
                Export Tableur
              </v-btn>
            </v-row>
            <v-row align="start">
              <v-data-table
                v-model="selected"
                :search="search"
                style="width: 100%"
                :headers="headers"
                :items="items"
                :single-select="singleSelect"
                item-key="id"
                show-select
                class="ut-table ut-table--stripped"
              >
                <template v-slot:item.date="{ item }">
                  {{ item.date | date('DD/MM/YYYY HH:mm:ss') }}
                </template>
                <template v-slot:item.type="{ item }">
                  <div class="d-flex align-center">
                    <v-icon
                      :class="item.type | iconClass"
                      class="mr-2"
                    >
                      {{ item.type | icon }}
                    </v-icon>
                    <span>{{ item.type | capitalize }}</span>
                  </div>
                </template>
                <template v-slot:item.fonction="{ item }">
                  <v-select
                    hide-details
                    class="ut-table__select"
                    :items="fonctions"
                    :value="item.fonction"
                  />
                </template>
                <template v-slot:item.clé="{ item }">
                  <a
                    v-if="item.clé.url"
                    :href="item.clé.url"
                    target="_blank"
                  >{{ item.clé.value | capitalize }}</a>
                  <span v-if="!item.clé.url">{{ item.clé.value | capitalize }}</span>
                </template>
                <template v-slot:item.infos="{ item }">
                  <v-tooltip bottom>
                    <template v-slot:activator="obj">
                      <div
                        class="d-none d-lg-block"
                        v-on="obj.on"
                      >
                        <div
                          v-if="item.infos instanceof Object"
                          class="ut-table-cell__nowrap"
                          style="max-width: 500px;"
                        >
                          <span
                            v-for="(val, key) in item.infos"
                            :key="key"
                            class="custom__separator"
                          >
                            {{ key | capitalize }}: {{ val | capitalize }}
                          </span>
                        </div>
                        <span v-else>{{ item.infos }}</span>
                      </div>
                      <v-icon
                        class="d-lg-none ut-pointer"
                        v-on="obj.on"
                      >
                        mdi-information
                      </v-icon>
                    </template>
                    <div>
                      <div v-if="item.infos instanceof Object">
                        <span
                          v-for="(val, key) in item.infos"
                          :key="key"
                          class="custom__separator"
                        >
                          {{ key | capitalize }}: {{ val | capitalize }}
                        </span>
                      </div>
                      <span v-else>{{ item.infos }}</span>
                    </div>
                  </v-tooltip>
                </template>
              </v-data-table>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
  `,
  methods: {
    close: action('close'),
    back: action('back'),
    next: action('next'),
    refresh: action('refresh'),
    home: action('home'),
    logout: action('logout'),
  },
  filters: {
    capitalize(value: string) {
      if (!value) return '';
      return value.toString().charAt(0).toUpperCase() + value.slice(1);
    },
    date(value: any, format: any) {
      return moment(value).format(format);
    },
    icon(value: string) {
      if (value === 'alert') {
        return 'mdi-alert-circle';
      }
      if (value === 'info') {
        return 'mdi-information';
      }
      if (value === 'check') {
        return 'mdi-check-circle';
      }
      return '';
    },
    iconClass(value: string) {
      if (value === 'alert') {
        return 'ut-error';
      }
      if (value === 'info') {
        return 'ut-info';
      }
      if (value === 'check') {
        return 'ut-success';
      }
      return '';
    },
  },
  data: () => ({
    // eslint-disable-next-line global-require
    ...require('./data'),
    appImg,
  }),
};

export default component;
