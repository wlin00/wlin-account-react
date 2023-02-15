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