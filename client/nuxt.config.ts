// https://nuxt.com/docs/api/configuration/nuxt-config
import { fileURLToPath } from "url";

export default defineNuxtConfig({
	devtools: { enabled: true },
	alias: {
		"@features": fileURLToPath(new URL("./features", import.meta.url)),
		"@pages": fileURLToPath(new URL("./pages", import.meta.url)),
		"@shared": fileURLToPath(new URL("./shared", import.meta.url)),
		"@shared/ui": fileURLToPath(new URL("./shared/ui", import.meta.url))
	},
	modules: [],
	css: ["@/app/styles/styles.scss"],
	dir: {
		pages: "routes"
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {}
		}
	}
});
