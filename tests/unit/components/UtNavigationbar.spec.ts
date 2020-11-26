import { UtNavigationBar } from '@/components/UtNavigationBar';

describe('UtNavigationBar', () => {
  it('close method emits "close" event', () => {
    const UtNavigationBarComponent: any = new UtNavigationBar();
    UtNavigationBarComponent.$emit = jest.fn();
    UtNavigationBarComponent.close();

    expect(UtNavigationBarComponent.$emit).toHaveBeenCalledTimes(1);
    expect(UtNavigationBarComponent.$emit).toHaveBeenCalledWith('close');
  });
});
