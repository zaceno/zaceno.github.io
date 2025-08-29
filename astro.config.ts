import { defineConfig } from "astro/config"
import hyperapp from "astrojs-hyperapp"
import mdx from "@astrojs/mdx"

// https://astro.build/config
export default defineConfig({
  site: "https://zaceno.github.io",
  integrations: [
    hyperapp(),
    mdx({
      shikiConfig: {
        theme: "material-theme-ocean",
      },
    }),
  ],
})
