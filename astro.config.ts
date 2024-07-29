import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
	markdown: {
		shikiConfig: {
			theme: "catppuccin-latte"
		}
	},
	site: "https://jatinkumar.dev"
});
