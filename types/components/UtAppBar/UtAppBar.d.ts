import { Vue } from 'vue-property-decorator';
import { MenuItem } from '../UtAppMenu';
import './UtAppBar.scss';
export default class UtAppBar extends Vue {
    logo: string;
    username: string;
    items: MenuItem[];
    dark: boolean;
    website: string;
    page: string;
    logout(): void;
    navigate(item: MenuItem): void;
    showMenu: boolean;
    maxLength: number;
}
