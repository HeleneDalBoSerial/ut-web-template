import { Vue } from 'vue-property-decorator';
import { TimeComponent } from './utils';
import './UtTimePicker.scss';
export default class UtTimePicker extends Vue {
    value: string;
    get decomposedTime(): import("./utils").Time;
    now(): void;
    add(timeComponent: TimeComponent): void;
    subtract(timeComponent: TimeComponent): void;
    change(timeComponent: TimeComponent, value: number): void;
}
