import * as Mollitia from 'mollitia';
import { mount } from '@vue/test-utils';
import Scrap from '@/components/Scrap.vue';

describe('Scrap', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Scrap, {
      mocks: {
        $mollitia: Mollitia
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
