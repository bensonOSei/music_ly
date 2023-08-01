/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,jsx}", "./src/**/**/*.{js,jsx}"],
	theme: {
		extend: {
			colors: {
				primary: {
					100: "#ccd3fd",
					200: "#99a6fb",
					300: "#667af9",
					400: "#334df7",
					500: "#0021f5",
					600: "#001ac4",
					700: "#001493",
					800: "#000d62",
					900: "#000731",
				},
			},
		},
	},
	// eslint-disable-next-line no-undef
	plugins: [require('@tailwindcss/forms')],
};
