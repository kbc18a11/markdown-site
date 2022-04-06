import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      'components': path.resolve(__dirname, "src/components"),
      'stores': path.resolve(__dirname, "src/stores"),
      'types': path.resolve(__dirname, "src/types"),
      'pages': path.resolve(__dirname, "src/pages"),
    }
  }
});
