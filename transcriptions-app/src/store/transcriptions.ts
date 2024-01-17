import { defineStore } from 'pinia';
import { Transcription } from '@/api/types';
import { postTranscriptions, getTranscriptions } from '@/api';

interface State {
  transcriptions: Transcription[];
}

export const useTranscriptionsStore = defineStore('transcriptions', {
  state: (): State => ({
    transcriptions: [],
  }),
  getters: {
    getTranscriptions(state) {
      return state.transcriptions;
    },
  },
  actions: {
    async fetchTranscriptions() {
      const data: Transcription[] = await getTranscriptions();

      this.transcriptions.push(...data);
    },
    async sendTranscriptions(payload: Transcription[]) {
      await postTranscriptions(payload);
    },
    addTranscriptionRow() {
      this.transcriptions.push({
        id: new Date().getTime().toString(),
        text: 'Change text here',
        voice: 'Change voice here',
      });
    },
    removeTranscriptionRow(transcription: Transcription) {
      const currentIndex = this.transcriptions.indexOf(transcription);
      this.transcriptions.splice(currentIndex, 1);
    },
  },
});
