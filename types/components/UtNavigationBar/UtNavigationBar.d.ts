import { Vue } from 'vue-property-decorator';
import './UtNavigationBar.scss';
export interface UtNavigationBarButton {
    show: boolean;
}
export interface UtNavigationBarOptions {
    actions: {
        home: UtNavigationBarButton;
        refresh: UtNavigationBarButton;
        next: UtNavigationBarButton;
        back: UtNavigationBarButton;
        close: UtNavigationBarButton;
    };
}
export default class UtNavigationBar extends Vue {
    options: UtNavigationBarOptions;
    back(): void;
    next(): void;
    home(): void;
    refresh(): void;
    close(): void;
}
