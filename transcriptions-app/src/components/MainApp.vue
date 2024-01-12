<template>
  <div class="main-app">
    <header class="header">
      <h2 class="header-title">Transcriptions</h2>
      <div class="header-items">
        <button class="button">
          <img :src="UploadIcon" alt="Button to upload data" />
        </button>
        <button class="button">
          <img :src="FetchDataIcon" alt="Button to get information" />
        </button>
      </div>
    </header>
    <main class="container">
      <TranscriptionItem />
      <TranscriptionItem />
      <div class="container-item">
        <button class="button">
          <img :src="AddRowIcon" alt="Add Row" />
        </button>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import TranscriptionItem from './TranscriptionItem.vue';
import FetchDataIcon from '../assets/fetch-document.svg';
import UploadIcon from '../assets/upload.svg';
import AddRowIcon from '../assets/add-row.svg';
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
