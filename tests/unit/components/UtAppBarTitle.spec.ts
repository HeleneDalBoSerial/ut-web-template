import { UtAppBarTitle } from '@/components/UtAppBar';
import { getMountedComponent } from '../test-utils';

const $vuetifyMock = { breakpoint: { smAndUp: true } };

describe('UtAppBarTitle', () => {
  it('affiche le nom de la page', () => {
    expect(
      getMountedComponent(UtAppBarTitle, {
        page: 'page',
        website: 'website',
      }, $vuetifyMock).find('.ut-app-bar-title__page').text(),
    ).toBe('page');
  });

  it('affiche le nom du site', () => {
    expect(
      getMountedComponent(UtAppBarTitle, {
        page: 'page',
        website: 'website',
      }, $vuetifyMock).find('.ut-app-bar-title__website').text(),
    ).toBe('website');
  });
});
