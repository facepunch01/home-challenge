import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'


// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/my-element.js',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  },
  plugins: [
    WindiCSS(),
  ]
})
