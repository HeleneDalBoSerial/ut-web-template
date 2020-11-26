import Vue from 'vue';
import {
  VListItem,
  VListItemAction,
  VListItemTitle,
  VListItemContent,
  VListGroup,
  VIcon,
} from 'vuetify/lib';
// eslint-disable-next-line no-unused-vars
import { MenuNavItem } from './MenuItem';
import './UtAppMenuNavItem.scss';

export default Vue.extend({
  name: 'ut-app-menu-nav-item',
  components: {
    VListItem,
    VListItemAction,
    VListItemTitle,
    VListItemContent,
    VListGroup,
    VIcon,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    click(item: MenuNavItem) {
      this.$emit('click', item);
    },
  },
  template: `
    <v-list-item
      v-if="!item.items"
      :input-value="item.selected"
      :disabled="item.disabled"
      class="ut-app-menu__list-item"
      :class="item.selected ? 'ut-app-menu__list-item--selected' : ''"
      @click="click(item)"
    >
      <v-list-item-title>{{ item.title }}</v-list-item-title>
      <v-list-item-action>
        <v-icon :disabled="item.disabled">mdi-chevron-right</v-icon>
      </v-list-item-action>
    </v-list-item>
    <v-list-group
      v-else
      dark
      no-action
      class="ut-app-menu__list-group"
      style="color: #fff !important"
    >
      <template v-slot:activator>
        <v-list-item-content class="ut-app-menu__list-group__header">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </template>

      <ut-app-menu-nav-item
        v-for="(subItem, j) in item.items"
        :key="j"
        :item="subItem"
        @click="click"
      />
    </v-list-group>
  `,
});
