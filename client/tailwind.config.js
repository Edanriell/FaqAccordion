/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./components/**/*.{js,vue,ts}",
		"./layouts/**/*.vue",
		"./pages/**/*.vue",
		"./routes/**/*.vue",
		"./plugins/**/*.{js,ts}",
		"./app.vue",
		"./error.vue"
	],
	theme: {
		fontFamily: {
			workSans: ["Work Sans"]
		},
		extend: {
			colors: {
				revolver: {
					50: "#fbf7fc",
					100: "#f6eef9",
					200: "#ecdcf2",
					300: "#dec0e7",
					400: "#cb9bd7",
					500: "#b273c2",
					600: "#9654a5",
					700: "#7d4388",
					800: "#683870",
					900: "#58325d",
					950: "#301534"
				},
				"electric-violet": {
					50: "#fcf5ff",
					100: "#f7e8ff",
					200: "#f0d5ff",
					300: "#e4b3ff",
					400: "#d383fd",
					500: "#c253f9",
					600: "#ad28eb",
					700: "#9a20d0",
					800: "#8120a9",
					900: "#691b88",
					950: "#4a0665"
				},
				"blue-chalk": {
					50: "#fbf5ff",
					100: "#f8eeff",
					200: "#eed5ff",
					300: "#e0b4fe",
					400: "#cd84fc",
					500: "#ba55f7",
					600: "#a733ea",
					700: "#9122ce",
					800: "#7a21a8",
					900: "#641c87",
					950: "#450764"
				},
				"trendy-pink": {
					50: "#faf8fb",
					100: "#f5f1f6",
					200: "#eae2ec",
					300: "#dacadd",
					400: "#c3abc7",
					500: "#a887ae",
					600: "#8b6990",
					700: "#725576",
					800: "#5f4761",
					900: "#513d52",
					950: "#302131"
				},
				white: {
					50: "#ffffff",
					100: "#efefef",
					200: "#dcdcdc",
					300: "#bdbdbd",
					400: "#989898",
					500: "#7c7c7c",
					600: "#656565",
					700: "#525252",
					800: "#464646",
					900: "#3d3d3d",
					950: "#292929"
				}
			}
		}
	},
	plugins: []
};
