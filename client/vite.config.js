import { defineConfig } from 'vite';

export default defineConfig({
  // This ensures that all asset paths in the built index.html are absolute (e.g., /assets/index.js)
  // This is crucial for react-router-dom to work on any URL.
  base: '/', 
  
  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      }
    }
  },
});