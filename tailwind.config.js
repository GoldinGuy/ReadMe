const { green } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");

module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		colors: {
			transparent: "transparent",
			current: "currentColor",
			black: colors.black,
			white: colors.white,
			gray: colors.coolGray,
			lime: colors.lime,
			green: colors.green,
			emerald: colors.emerald,
			amber: colors.amber,
			yellow: colors.yellow,
			lgreen: "colors.light-green",
			indigo: colors.indigo
		},
		extend: {}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
