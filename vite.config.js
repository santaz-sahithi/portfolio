import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/workik-assets': { // A path prefix for your proxied requests
        target: 'https://workik-widget-assets.s3.amazonaws.com',
        changeOrigin: true, // Important for CORS
        rewrite: (path) => path.replace(/^\/workik-assets/, ''), // Remove the prefix
      },
    },
  },
})
