import { Vue } from 'vue-property-decorator';
import './UtAppMenu.scss';
import { MenuItem } from './MenuItem';
export default class UtAppMenu extends Vue {
    items: MenuItem[];
    title: string;
    username: string;
    get pages(): MenuItem[];
    get apps(): MenuItem[];
    get hasApps(): boolean;
    get hasPages(): boolean;
    hide(): void;
    click(item: MenuItem): void;
    logout(): void;
}
