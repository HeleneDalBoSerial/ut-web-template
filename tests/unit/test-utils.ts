import { shallowMount } from '@vue/test-utils';

export function getMountedComponent(Component: any, propsData: any, $vuetify: any = undefined) {
  return shallowMount(Component, {
    propsData,
    mocks: {
      $vuetify,
    },
  });
}
