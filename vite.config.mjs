import { defineConfig } from 'vite';

// EverLight is a single self-contained static page (everlight.html). Vite is used
// only as a zero-config dev server + optional bundler. `host: true` exposes the
// server on 0.0.0.0 so Codespaces / dev containers can forward the port.
export default defineConfig({
  server: {
    host: true,
    port: 5173,
    strictPort: true
  },
  preview: {
    host: true,
    port: 4173
  }
});
