import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    proxy: {
      '/api': {
        target:
          process.env.NODE_ENV === 'development'
            ? 'https://port-0-haru-cote-server-fi1xh2bltqnoclo.sel5.cloudtype.app/'
            : 'https://port-0-haru-cote-server-fi1xh2bltqnoclo.sel5.cloudtype.app/',
        changeOrigin: true,
      },
    },
  },
})
