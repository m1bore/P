import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/P'  // Reemplaza "nombre-repositorio" con el nombre de tu repositorio
    : '/'
}
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
