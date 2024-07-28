import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


const isDevEnv = false

export default defineConfig({
  plugins: [react()],
  test: {
    globals : true,
    environment: 'jsdom',
    setupFiles : './src/--tests--/setup.js'
  },
  server: {
    proxy: {
      '/students': {
        target: isDevEnv ? 'http://127.0.0.1:9000' : 'https://globalbackend-zued.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/courses': {
        target: isDevEnv ? 'http://127.0.0.1:9000' : 'https://globalbackend-zued.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});