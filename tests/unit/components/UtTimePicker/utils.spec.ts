import { isValidTime, decomposeTime } from '@/components/UtTimePicker/utils';

describe('isValidTime', () => {
  it('validates against time regex', () => {
    expect(isValidTime('19:54:20')).toBe(true);

    expect(isValidTime('109:54:20')).toBe(false);
    expect(isValidTime('-1:54:20')).toBe(false);
    expect(isValidTime('19;54:20')).toBe(false);
    expect(isValidTime('1 9;54:20')).toBe(false);
    expect(isValidTime('19: 54:20')).toBe(false);
  });
});

describe('decomposeTime', () => {
  it('get hours, minutes, seconds', () => {
    expect(decomposeTime('19:54:20').hours).toBe('19');
    expect(decomposeTime('19:54:20').minutes).toBe('54');
    expect(decomposeTime('19:54:20').seconds).toBe('20');
  });
});
