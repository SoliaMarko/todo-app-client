import {loadEnv, defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const env = loadEnv('development', process.cwd(), '');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@enums': path.resolve(__dirname, './src/enums'),
      '@features': path.resolve(__dirname, './src/features'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@interfaces': path.resolve(__dirname, './src/interfaces'),
      '@models': path.resolve(__dirname, './src/models'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@services': path.resolve(__dirname, './src/services'),
      '@state': path.resolve(__dirname, './src/state'),
      '@styles': path.resolve(__dirname, './src/styles'),
      '@types': path.resolve(__dirname, './src/types'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@validations': path.resolve(__dirname, './src/validations')
    }
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': env.VITE_API_URL
    },
    open: true
  }
});
