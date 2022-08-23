/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: [
		'./src/pages/**/*.{tsx,ts,jsx,js}',
		'./src/components/**/*.{tsx,ts,jsx,js}'
	],
	darkMode: 'class',
	theme: {
		extend: {}
	},
	plugins: []
};
