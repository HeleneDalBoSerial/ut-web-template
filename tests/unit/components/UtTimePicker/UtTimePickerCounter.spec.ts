import { UtTimePickerCounter } from '@/components/UtTimePicker';
import { getMountedComponent } from '../../test-utils';

describe('UtTimePickerCounter', () => {
  it('add method emits "add" event', () => {
    const cmp: any = getMountedComponent(UtTimePickerCounter, { value: '1' });
    cmp.vm.$emit = jest.fn();
    cmp.vm.add();

    expect(cmp.vm.$emit).toHaveBeenCalledTimes(1);
    expect(cmp.vm.$emit).toHaveBeenCalledWith('add');
  });

  it('subtract method emits "subtract" event', () => {
    const cmp: any = getMountedComponent(UtTimePickerCounter, { value: '1' });
    cmp.vm.$emit = jest.fn();
    cmp.vm.subtract();

    expect(cmp.vm.$emit).toHaveBeenCalledTimes(1);
    expect(cmp.vm.$emit).toHaveBeenCalledWith('subtract');
  });

  it('format value to be 2 characters long', (done) => {
    const cmp: any = getMountedComponent(UtTimePickerCounter, { value: '1' });
    expect(cmp.vm.inputValue).toEqual('01');

    cmp.setProps({ value: '60' });
    cmp.vm.$nextTick(() => {
      expect(cmp.vm.inputValue).toEqual('60');
      done();
    });
  });
});
