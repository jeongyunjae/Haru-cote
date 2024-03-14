import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    // origin: 'http://127.0.0.1:8080/',
    proxy: {
      '/api': {
        target: 'https://solved.ac',
        changeOrigin: true,
        secure: true,
      },
    },
  },
})
