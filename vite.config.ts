import {loadEnv, defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

const env = loadEnv('development', process.cwd(), '');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': env.VITE_API_URL
    },
    open: true
  }
});
