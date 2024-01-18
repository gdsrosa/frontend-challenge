import { beforeEach, expect, it, describe } from 'vitest';
import { mount } from '@vue/test-utils';

import MainApp from '@/components/MainApp.vue';
import { createPinia, setActivePinia } from 'pinia';
import { useTranscriptionsStore } from '@/store/transcriptions';

describe('MainApp', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('should render message', () => {
    const props = { message: 'Transcriptions' };

    const wrapper = mount(MainApp, { props });

    expect(wrapper.text()).toContain('Transcriptions');
  });

  it('should not have transcriptions on the first render', () => {
    const wrapper = mount(MainApp);

    expect(wrapper.find('[data-test="transcriptions"]').exists()).toBe(false);
  });

  it('should fetch transcriptions when action is called', async () => {
    const state = useTranscriptionsStore();

    expect(state.transcriptions.length).toBe(0);

    await state.fetchTranscriptions();

    expect(state.transcriptions.length).toBe(4);
  });
});
