module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				greener: {
					lightest: "#b7e4c7",
					lighter: "#95d5b2",
					light: "#74c69d",
					DEFAULT: "#52b788",
					dark: "#40916c",
					darker: "#2d6a4f",
					darkest: "#081c15"
				},
				grayer: "#F0F1F4",
				grayest: "#333333"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
