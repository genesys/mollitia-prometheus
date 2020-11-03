import * as Mollitia from 'mollitia';
import { mount } from '@vue/test-utils';
import Circuit from '@/components/Circuit.vue';

describe('Circuit', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Circuit, {
      mocks: {
        $mollitia: Mollitia
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
