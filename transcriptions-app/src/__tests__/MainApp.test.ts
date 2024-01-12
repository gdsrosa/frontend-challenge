import { expect, test } from 'vitest';
import { mount } from '@vue/test-utils';

import MainApp from '../components/MainApp.vue';

test('should render message', () => {
  const props = { message: 'Transcriptions' };

  const wrapper = mount(MainApp, { props });

  expect(wrapper.text()).toContain('Transcriptions');
});
