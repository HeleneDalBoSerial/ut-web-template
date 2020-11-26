import './UtAppMenuAppItem.scss';
import { VIcon } from 'vuetify/lib';

export default {
  name: 'ut-app-menu-app-item',
  components: {
    VIcon,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  template: `
    <div
    class="ut-app-menu__site pa-3 d-flex flex-column justify-center align-center"
    :style="{'background-color': item.color}"
    @click="$emit('click', item)"
  >
    <v-icon color="white" class="ut-app-menu__site__icon">
      {{ item.icon }}
    </v-icon>
    <div class="text-no-wrap white--text ut-app-menu__site__title">
      {{ item.title }}
    </div>
  </div>
  `,
};
