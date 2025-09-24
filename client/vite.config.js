import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // <--- IMPORT THE PLUGIN

// https://vitejs.dev/config/
export default defineConfig({
  // ADD THE PLUGINS ARRAY
  plugins: [react()], 

  // KEEP THIS LINE FOR CORRECT PATHS
  base: './',

  server: {
    host: true,
    port: 5173,
    // Add this proxy configuration
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Your backend server URL
        changeOrigin: true,
      }
    }
  },
})