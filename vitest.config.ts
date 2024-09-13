import { defineConfig } from 'vitest/config';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: 'jsdom',  // Symulacja przeglądarki dla komponentów Vue
    globals: true,
  },
});