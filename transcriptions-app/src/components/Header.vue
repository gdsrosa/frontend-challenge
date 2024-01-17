<template>
  <header class="header">
    <h2 class="header-title">Transcriptions</h2>
    <div class="header-items">
      <button class="button" @click="handleGetTranscriptions">
        <img :src="UploadIcon" alt="Button to upload data" />
      </button>
      <button class="button" @click="handlePostTranscriptions">
        <img :src="FetchDataIcon" alt="Button to get information" />
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useTranscriptionsStore } from '@/store/transcriptions';

import FetchDataIcon from '@/assets/fetch-document.svg';
import UploadIcon from '@/assets/upload.svg';

const store = useTranscriptionsStore();

async function handleGetTranscriptions() {
  await store.fetchTranscriptions();
}

async function handlePostTranscriptions() {
  await store.sendTranscriptions(store.transcriptions);
}
</script>

<style scoped>
.header {
  align-items: center;
  background-color: #fff;
  border-bottom-width: 1px;
  border: 1px solid #d4d5d6;
  display: flex;
  justify-content: space-between;
  padding-left: 9rem;
  padding-right: 9rem;
}
.header-title {
  color: #414c5e;
  font-family: 'Montserrat', sans-serif;
  padding-bottom: 1rem;
  padding-top: 1rem;
}

.header-items {
  display: flex;
  justify-content: space-between;
  width: 4rem;
}

.button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
