import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  alias: {
    '/@/': path.resolve( '/src')
  },
  plugins: [vue()],
})
