import {
  defineConfig, presetAttributify, presetIcons,
  presetTypography, presetUno, transformerAttributifyJsx
} from 'unocss'
export default defineConfig({
  theme: {
  },
  shortcuts: {
    'wlin-custom-button': 'h-48px w-100% bg-#39f b-none text-white rounded-8px',
    'flex-c': 'flex justify-center items-center',
    'inline-flex-c': 'inline-flex justify-center items-center',
  },
  safelist: [],
  rules: [
    // var(--vh-offset, 0px) 会由当前vhCheck动态计算默认为0px 用于解决部分浏览器的底部状态条问题
    ['h-screen', {height: 'calc(100vh - var(--vh-offset, 0px))'}] 
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      extraProperties: { 'display': 'inline-block', 'vertical-align': 'middle' },
    }),
    presetTypography(),
  ],
  transformers: [
    transformerAttributifyJsx()
  ]
})