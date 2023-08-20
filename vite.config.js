import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/jcloud-mclaren-viewer/',
  server: {
    port: 4000,
  },
});
