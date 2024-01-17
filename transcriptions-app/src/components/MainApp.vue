<template>
  <div class="main-app">
    <Header />
    <main v-if="transcriptions?.length" class="container">
      <template :key="transcription.id" v-for="transcription in transcriptions">
        <TranscriptionItem :transcription="transcription" />
      </template>
      <div class="container-item">
        <button class="button" @click="handleAddRowClick">
          <img :src="AddRowIcon" alt="Add Row" />
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import TranscriptionItem from './TranscriptionItem.vue';
import Header from './Header.vue';

import AddRowIcon from '@/assets/add-row.svg';

import { useTranscriptionsStore } from '@/store/transcriptions';

const store = useTranscriptionsStore();
const { transcriptions } = storeToRefs(useTranscriptionsStore());

function handleAddRowClick() {
  store.addTranscriptionRow();
}
</script>

<style scoped>
.main-app {
  background-color: #f6f7f8;
  height: 100vh;
}
.button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-top: 1rem;
}

.container-item {
  display: flex;
  justify-content: center;
  padding-top: 1.5rem;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {
  .container {
    max-width: 1536px;
  }
}
</style>
