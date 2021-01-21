import { mount } from '@vue/test-utils';
import Sidebar from '@/components/Sidebar.vue';

describe('Sidebar', () => {
  it('is a Vue instance', () => {
    const wrapper = mount(Sidebar, {
      propsData: {
        sidebar: {
          links: []
        }
      }
    });
    expect(wrapper.vm).toBeTruthy();
  });
});
