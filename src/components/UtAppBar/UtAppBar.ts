import { Component, Vue, Prop } from 'vue-property-decorator';
import {
  VCol,
  VRow,
  VAppBar,
  VAppBarNavIcon,
  VMenu,
  VBtn,
  VIcon,
  VDialog,
  VTooltip,
} from 'vuetify/lib';
import { UtAppMenu, MenuItem } from '../UtAppMenu';
import UtAppBarTitle from './UtAppBarTitle';
import './UtAppBar.scss';
import ugitechLogo from '../../assets/ugitech-original.svg';

@Component({
  name: 'ut-app-bar',
  components: {
    VCol,
    VRow,
    VAppBar,
    VAppBarNavIcon,
    VBtn,
    VIcon,
    VMenu,
    VDialog,
    VTooltip,
    UtAppBarTitle,
    UtAppMenu,
  },
  filters: {
    initials(value: string, maxLength: number = 20) {
      if (value.length > maxLength) {
        const splitUsername = value.split(' ');
        if (splitUsername.length === 2) {
          return `${splitUsername[0][0].toUpperCase()}${splitUsername[1][0].toUpperCase()}`;
        }
      }

      return value;
    },
  },
  template: `
  <v-app-bar
    app
    class="ut-app-bar"
    clipped-left
    :dark="dark"
  >
    <v-row>
      <v-col
        cols="2"
        lg="4"
        md="4"
        class="d-flex justify-start text-no-wrap ut-no-overflow align-center"
      >
        <div
          v-if="username && $vuetify.breakpoint.mdAndUp"
          class="d-flex align-center"
        >
          <v-btn
            icon
            @click="logout"
          >
            <v-icon>mdi-power</v-icon>
          </v-btn>
          <div
            class="ut-app-bar__username ml-2">
            <v-tooltip bottom v-if="username.length > maxLength">
              <template v-slot:activator="obj">
                <div v-on="obj.on" style="cursor: default">{{ username | initials(maxLength) }}</div>
              </template>
              <span>{{ username }}</span>
            </v-tooltip>
            <span v-else>
            {{ username }}
            </span>
          </div>
        </div>
        <img
          v-if="$vuetify.breakpoint.smAndDown"
          class="ut-app-bar-title__img"
          :src="logo"
        >
      </v-col>

      <v-col
        cols="8"
        md="4"
        lg="4"
        class="d-flex justify-center text-no-wrap"
      >
        <img
          v-if="$vuetify.breakpoint.mdAndUp"
          class="ut-app-bar-title__img"
          :src="logo"
        >
        <ut-app-bar-title
          :website="website"
          :page="page"
        />
      </v-col>

      <v-col
        lg="4"
        md="4"
        cols="2"
        class="d-flex justify-end text-no-wrap ut-no-overflow"
      >
        <v-dialog
          v-if="items.length > 0 && $vuetify.breakpoint.xsOnly"
          v-model="showMenu"
          dark
          transition="slide-x-reverse-transition"
          fullscreen >
          <template v-slot:activator="obj">
            <v-app-bar-nav-icon v-on="obj.on" />
          </template>
          <ut-app-menu
            :items="items"
            title="Menu"
            :username="username"
            @hide="showMenu = false"
            @logout="logout"
            @click="navigate"
          >
            <template v-slot:img>
              <slot name="menuImg"></slot>
            </template>
          </ut-app-menu>
        </v-dialog>
        <v-menu
          v-if="items.length > 0 && $vuetify.breakpoint.smAndUp"
          v-model="showMenu"
          fixed
          nav
          :close-on-click="false"
          :close-on-content-click="false"
          dark
        >
          <template v-slot:activator="obj">
            <v-app-bar-nav-icon v-on="obj.on" />
          </template>
          <ut-app-menu
            :items="items"
            title="Menu"
            @hide="showMenu = false"
            @logout="logout"
            @click="navigate"
            :username="username"
          >
            <template v-slot:img>
              <slot name="menuImg"></slot>
            </template>
          </ut-app-menu>
        </v-menu>
      </v-col>
    </v-row>
  </v-app-bar>
  `,
})
export default class UtAppBar extends Vue {
  @Prop({
    type: String,
    required: false,
    default: ugitechLogo,
  }) logo!: string;

  @Prop({
    type: String,
    required: false,
    default: undefined,
  }) username!: string;

  @Prop({
    type: Array,
    required: true,
  }) items!: MenuItem[];

  @Prop({
    type: Boolean,
    required: true,
  }) dark!: boolean;

  @Prop({
    type: String,
    required: true,
  }) website!: string;

  @Prop({
    type: String,
    required: true,
  }) page!: string;


  logout() {
    this.$emit('logout');
  }

  navigate(item: MenuItem) {
    this.$emit('navigate', item);
  }

  showMenu = false;

  maxLength = 20;
}
