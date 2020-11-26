import { Vue } from 'vue-property-decorator';
import moment from 'moment';
import './UtDatetimePicker.scss';
export default class UtDatetimePicker extends Vue {
    value: Date;
    get momentObj(): moment.Moment;
    get date(): string;
    get time(): string;
    onTimeChange(newValue: string): void;
    onDateChange(newValue: string): void;
}
