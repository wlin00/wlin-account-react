import { defineConfig } from 'vite'
// @ts-ignore
import react from '@vitejs/plugin-react'
import Unocss from 'unocss/vite'
import { svgsprites } from './vite_plugins/svgsprites'
// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  define: {
    isDev: command === 'serve' // npm run dev --serve 启动本地调试环境，便于本地开启mock系统
  },
  base: '/',
  plugins: [
    Unocss(),
    react(),
    svgsprites({ noOptimizeList: [
      'home', 'charts', 'notify', 'pig', 'clock', 'chart', 'cloud', 'mangosteen', 'left', 'calendar'
    ] })
  ],
  server: { // 开发环境反向代理到云服务器
    host: '0.0.0.0',
    proxy: {
      '/api/v1': {
        target: 'http://47.94.212.148:3000/'
      }
    }

  }
}))
