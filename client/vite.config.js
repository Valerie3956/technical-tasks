import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'




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
        target: 'https://globalbackend-zued.onrender.com',
        changeOrigin: true,
        secure: false,
      },
      '/courses': {
        target: 'https://globalbackend-zued.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});