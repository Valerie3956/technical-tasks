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
        target: 'http://localhost:9000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});