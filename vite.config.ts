import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    Unocss(),
    react(),
  ],
  server: { // 开发环境反向代理到云服务器
    host: '0.0.0.0',
    proxy: {
      '/api/v1': {
        target: 'http://47.94.212.148:3000/'
      }
    }

  }
})
