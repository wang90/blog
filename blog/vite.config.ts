import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path")

export default defineConfig({
  alias: {
    '/@src': path.resolve(__dirname,'/src/'),
  },
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        includePaths: [
          path.resolve(__dirname, '../node_modules/compass-mixins/lib')
        ]
      },
      sass: {
        indentedSyntax: true,
        includePaths: [
          path.resolve(__dirname, '../node_modules/compass-mixins/lib')
        ] 
      },
    }
  }
})
