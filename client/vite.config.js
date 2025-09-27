import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // 1. Import the plugin

export default defineConfig({
  // This ensures that all asset paths in the built index.html are absolute (e.g., /assets/index.js)
  // This is crucial for react-router-dom to work on any URL.
  base: '/', 
  plugins: [react()], // 2. Use the plugin
  
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