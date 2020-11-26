import { Component, Vue } from 'vue-property-decorator';
import { VToolbarTitle } from 'vuetify/lib';
import './UtAppBarTitle.scss';

@Component({
  name: 'ut-app-bar-title',
  components: {
    VToolbarTitle,
  },
  template: `
  <div class="ut-app-bar-title">
    <v-toolbar-title>
      <span class="ut-app-bar-title__page">{{ page }}</span>
      <span
        v-if="$vuetify.breakpoint.smAndUp"
        class="ut-app-bar-title__website">
        {{ website }}
      </span>
    </v-toolbar-title>
  </div>
  `,
  props: {
    website: {
      type: String,
      required: true,
    },
    page: {
      type: String,
      required: true,
    },
  },
})
export default class UtAppBarTitle extends Vue {

}
