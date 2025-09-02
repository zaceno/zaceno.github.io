import { defineConfig } from "astro/config"
import hyperapp from "astrojs-hyperapp"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"

// https://astro.build/config
export default defineConfig({
  site: "https://zaceno.github.io",
  integrations: [
    sitemap(),
    hyperapp(),
    mdx({
      shikiConfig: {
        theme: "material-theme-ocean",
      },
    }),
  ],
})
