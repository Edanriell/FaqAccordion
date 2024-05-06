// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
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
