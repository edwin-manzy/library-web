import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
// eslint-disable-next-line
import eslint from 'vite-plugin-eslint2';
import path from 'path';
import { lingui } from '@lingui/vite-plugin';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({  // eslint-disable-line 
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call
  plugins: [eslint({
    lintOnStart: true,
    emitError: true,
  }), react(), lingui(), tailwindcss()],
  resolve: {
    alias: [
      { find: 'src', replacement: path.resolve(__dirname, 'src') },
    ],
  }
});
