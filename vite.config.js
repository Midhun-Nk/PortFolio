import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()   , tailwindcss(),
    
],
 base: "./",          // 👈 ensures assets load correctly after deploy
  build: {
    outDir: "dist",    // 👈 default, but good to be explicit
  },

})
