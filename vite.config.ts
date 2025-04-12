import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['**/*.scss'],
  },
  css: {
    modules: {
      generateScopedName: '[folder]__[local]__[hash:base64:2]',
    },
  },
})
