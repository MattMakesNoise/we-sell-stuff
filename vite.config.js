import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    https: {
      key: fs.readFileSync(path.resolve(process.env.HOME, 'Library/Application Support/Local/run/router/nginx/certs/woo-store.local.key')),
      cert: fs.readFileSync(path.resolve(process.env.HOME, 'Library/Application Support/Local/run/router/nginx/certs/woo-store.local.crt')),
    },
    proxy: {
      '/wp-json': {
        target: 'https://woo-store.local',
        changeOrigin: true,
        ws: true,
        strictSSL: false,
      },
    },
  },
})
