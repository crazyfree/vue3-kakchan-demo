import { describe, beforeEach, afterEach, it, expect } from 'vitest';
import { mount, VueWrapper } from '@vue/test-utils';
import SearchInput from '../SearchInput.vue';

describe('SearchInput.vue', () => {
  let wrapper: VueWrapper;

  beforeEach(() => {
    wrapper = mount(SearchInput);
  });

  afterEach(() => {
    wrapper.unmount();
  });

  it('emits search event on input change', async () => {
    const input = wrapper.find('input');
    input.element.value = 'leanne';
    await input.trigger('input');
    
    expect(wrapper.emitted('onSearch')?.at(0)).toEqual(['leanne']);
  });
});
