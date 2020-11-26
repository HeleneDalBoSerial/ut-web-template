import { Prop, Component, Vue } from 'vue-property-decorator';
import {
  VCard,
  VToolbar,
  VSpacer,
  VBtn,
  VToolbarTitle,
  VIcon,
  VList,
  VDivider,
  VSubheader,
  VRow,
  VCol,
} from 'vuetify/lib';
import UtAppMenuAppItem from './UtAppMenuAppItem';
import UtAppMenuNavItem from './UtAppMenuNavItem';
import './UtAppMenu.scss';
import { MenuItem } from './MenuItem';

@Component({
  name: 'ut-app-menu',
  components: {
    UtAppMenuAppItem,
    UtAppMenuNavItem,
    VCard,
    VToolbar,
    VSpacer,
    VBtn,
    VToolbarTitle,
    VIcon,
    VList,
    VDivider,
    VSubheader,
    VRow,
    VCol,
  },
  template: `
  <v-card class="ut-app-menu">
    <v-toolbar
      dark
      flat
    >
      <slot name="img"/>
      <v-spacer />
      <v-toolbar-title>
        <span class="ut-app-menu__title">{{ title }}</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        icon
        @click="hide()"
      >
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <div
      v-if="username && $vuetify.breakpoint.smAndDown"
      class="d-flex align-center ut-app-menu__user text-no-wrap"
    >
      <div class="ut-app-menu__user__username">{{ username }}</div>
      <v-spacer></v-spacer>
      <v-btn @click="logout" icon><v-icon>mdi-power</v-icon></v-btn>
    </div>
    <v-divider />
    <v-list v-if="hasPages">
      <template v-for="(item, i) in pages">
        <ut-app-menu-nav-item
          :key="i"
          :item="item"
          @click="click"
        />
      </template>
    </v-list>
    <v-divider />
    <v-list
      v-if="hasApps"
      class="ut-app-menu__app-list"
      subheader
    >
      <v-subheader>Autres sites</v-subheader>
      <v-row
        dark
        class="px-4"
        no-gutters
      >
        <v-col
          v-for="(app, i) in apps"
          :key="i"
          cols="4"
          class="d-flex justify-start mb-3"
        >
          <ut-app-menu-app-item
            :item="app"
            @click="click"
          />
        </v-col>
      </v-row>
    </v-list>
  </v-card>
  `,
})
export default class UtAppMenu extends Vue {
  @Prop({
    type: Array,
    required: true,
  })
  items!: MenuItem[];

  @Prop({
    type: String,
    required: true,
  })
  title!: string;

  @Prop({
    type: String,
    required: false,
  })
  username!: string;

  get pages() {
    return this.items.filter((i) => i.type !== 'app');
  }

  get apps() {
    return this.items.filter((i) => i.type === 'app');
  }

  get hasApps() {
    const { apps } = this;
    return apps && apps.length > 0;
  }

  get hasPages() {
    const { pages } = this;
    return pages && pages.length > 0;
  }

  hide() {
    this.$emit('hide');
  }

  click(item: MenuItem) {
    this.$emit('click', item);
  }

  logout() {
    this.$emit('logout');
  }
}
