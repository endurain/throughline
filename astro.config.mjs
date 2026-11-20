// @ts-check
import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';

const tokens = fileURLToPath(new URL('./src/styles/_tokens.scss', import.meta.url));

export default defineConfig({
  // Set to the production domain once known (used for canonical URLs).
  site: 'https://throughline.example',
  output: 'static',
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // Every SCSS block (component <style lang="scss"> and global.scss)
          // gets the palette, type and spacing tokens automatically.
          additionalData: `@use "${tokens}" as *;\n`,
        },
      },
    },
  },
});
