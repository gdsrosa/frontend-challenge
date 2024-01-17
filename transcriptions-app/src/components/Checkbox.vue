<template>
  <div>
    <input type="checkbox" name="transcription" :id="id" />
    <label :for="id"></label>
  </div>
</template>

<script setup lang="ts">
defineProps<{ id: string }>();
</script>

<style scoped>
[type='checkbox'] {
  opacity: 0;
}

[type='checkbox'] + label {
  position: relative;
  padding-left: 1px;
  cursor: pointer;
  display: inline-block;
  color: #666;
  line-height: 16px;
  margin-top: 5px;
}

[type='checkbox'] + label::before {
  content: '';
  position: absolute;
  left: 0;
  top: -22px;
  width: 16px;
  height: 16px;
  outline: 2px solid #859eff;
  background: #fff;
  border-radius: 1px;
}

[type='checkbox']:checked + label::after {
  content: '';
  position: absolute;
  left: 0;
  top: -22px;
  width: 16px;
  height: 16px;
  outline: 2px solid #859eff;
  background-image: url(../assets/check-mark-svgrepo-com.svg);
  background-size: contain;
  background-color: #859eff;
  border-radius: 1px;
}
</style>
