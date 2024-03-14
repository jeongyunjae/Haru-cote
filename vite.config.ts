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
            ? 'http://localhost:3080/api'
            : 'https://harucote.site/api',
        changeOrigin: true,
        rewrite: (path) => {
          // 원래 요청의 프로토콜과 호스트를 유지한 채로 포트만 변경
          const newPath = path.replace(/^\/api/, '')
          return newPath
        },
      },
    },
  },
})
