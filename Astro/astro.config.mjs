import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [tailwind(), react(), svelte()],
  adapter: node({
    mode: "standalone"
  })
});