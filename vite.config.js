import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://56.228.65.59:5000',
        changeOrigin: true,
        
      },
    },
  },
})