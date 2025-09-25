// client/vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  // Make sure the base is set to '/'
  base: '/',

  server: {
    host: true,
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your backend server URL
        changeOrigin: true,
      }
    }
  },
})