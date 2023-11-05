import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/Borntodev-client/',
  }

  if (command !== 'serve') {
    config.base = '/Borntodev-client/'
  }

  return config
})