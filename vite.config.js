import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'android-chrome.png'],
      manifest: {
        name: 'Trading App',
        short_name: 'Trading App',
        start_url:'/',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone'
      },
      workbox: {
        cleanupOutdatedCaches: true
      },
    })
  ],
  
})
