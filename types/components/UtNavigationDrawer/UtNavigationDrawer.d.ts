import { Vue } from 'vue-property-decorator';
import './UtNavigationDrawer.scss';
export interface NavigationDrawerToggleOptions {
    icon?: string;
    color?: string;
    dark?: boolean;
}
export default class UtNavigationDrawer extends Vue {
    toggleOptions: NavigationDrawerToggleOptions;
    value: boolean;
    title: string;
    onDrawerInput(value: boolean): void;
    toggleDrawer(): void;
    closeDialog(): void;
}
