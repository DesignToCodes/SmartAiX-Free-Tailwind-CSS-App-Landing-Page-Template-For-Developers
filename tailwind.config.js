/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["*", "./pages/**/*.{html,js}"],
	theme: {
		screens: {
			sm: "576px",
			md: "768px",
			lg: "992px",
			xl: "1200px",
			xxl: "1500px",
		},
		container: {
			center: true,
			padding: "1rem",
			screens: {
				sm: "100%",
				md: "768px",
				lg: "992px",
				xl: "1200px",
				xxl: "1320px",
			},
		},
		colors: {
			primary: "#493E81",
			primary1: "#423874",
			primary2: "#EDECF2",
			secondary: "#10165C",
			accent: "#E8E4FB",
			accent1: "#9FA2BE",
			white: "#FFFFFF",
			danger: "#CB3448",
		},
		fontFamily: {
			inter: ["Inter", "sans-serif"],
		},
		extend: {
			borderRadius: {
				std: "0.6rem",
				"std-1/2": "0.3rem",
			},
			boxShadow: {
				std: "0px 0px 25px 0px rgba(0, 0, 0, 0.06)",
			},
		},
	},
	plugins: [],
};
