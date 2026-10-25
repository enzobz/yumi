import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // O GitHub Pages serve o app em enzobz.github.io/yumi/
  base: '/yumi/',
})
