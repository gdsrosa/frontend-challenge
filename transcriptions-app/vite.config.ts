import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import { fileURLToPath } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  plugins: [vue()],
});
