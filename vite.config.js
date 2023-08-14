import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {},
      },
    },
    chunkSizeWarningLimit: 1000 * 1000, // Ajusta el límite de advertencia (1MB en este caso)
  },
  server: {
    open: true,
    host: true,
  },
});
