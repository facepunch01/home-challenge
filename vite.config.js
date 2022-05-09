import { defineConfig } from 'vite'
import WindiCSS from 'vite-plugin-windicss'


// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  return {
    build: {
      lib: {
        entry: "index.html",
        formats: ["es"],
      },
      rollupOptions: {
        external: mode === "production" ? "" : /^lit/,
      },
    },
    plugins: [
      WindiCSS(),
    ],
  };
});
