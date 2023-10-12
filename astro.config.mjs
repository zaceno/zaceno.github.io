import { defineConfig } from "astro/config"
import hyperapp from "@zxlabs/astrojs-hyperapp"

// https://astro.build/config
export default defineConfig({
  site: "https://zaceno.github.io",
  integrations: [hyperapp()],
})
