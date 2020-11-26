import { UtTimePicker } from '@/components/UtTimePicker';
import { getMountedComponent } from '../../test-utils';

describe('UtTimePicker', () => {
  it('decompose time from value', () => {
    const cmp: any = getMountedComponent(UtTimePicker, {
      value: '19:30:15',
    });
    expect(cmp.vm.value).toEqual('19:30:15');
    expect(cmp.vm.decomposedTime).toEqual({
      hours: '19',
      minutes: '30',
      seconds: '15',
    });
  });
});
