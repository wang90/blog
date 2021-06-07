import { defineConfig } from 'vite'
// import path from 'path'
import vue from '@vitejs/plugin-vue'
const path = require("path")

export default defineConfig({
  alias: {
    '/@src': path.resolve(__dirname,'/src/'),
  },
  plugins: [vue()],
})
