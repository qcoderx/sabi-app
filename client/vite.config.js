import { defineConfig } from 'vite'

export default defineConfig({
  // Add this line
  base: './', 
  
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