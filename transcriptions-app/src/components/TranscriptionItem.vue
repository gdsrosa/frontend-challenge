<template>
  <div class="card">
    <div class="card-item">
      <input type="checkbox" name="transcription" />
      <img class="card-item--image" :src="PersonIcon" alt="Drawing of a face" />
    </div>

    <div class="card-items">
      <input
        class="card-items-input-title"
        type="text"
        name="title"
        value="Voice 2"
      />
      <input
        class="card-items-input-description"
        type="text"
        name="description"
        value="This is one line sentence made to show how it fits"
      />
    </div>
    <button class="button">
      <img :src="RecycleBinIcon" alt="Bin Icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import PersonIcon from '../assets/person.svg';
import RecycleBinIcon from '../assets/delete.svg';
</script>

<style scoped>
.button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  visibility: hidden;
}
.card {
  background-color: #fff;
  border: 1px solid #d4d5d6;
  display: flex;
  align-items: center;
  padding: 0 1.5rem 1.5rem 1.5rem;
}

.card:hover > .button {
  visibility: visible;
}

.card-item {
  display: flex;
}

.card-item--image {
  margin-left: 1rem;
  margin-right: 0.5rem;
}

.card-items {
  display: flex;
  flex-direction: column;
  width: calc(100% - 20px);
}

.card-items-input-title {
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 600;
  color: #566074;
  padding-top: 1.5rem;
  border: none;
}

.card-items-input-description {
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #778195;
  border: none;
}
</style>
