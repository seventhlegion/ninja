/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	content: ['./src/**/*.{tsx,ts,jsx,js}'],
	darkMode: 'class',
	theme: {
		extend: {
			backgroundColor: {
				primary: 'var(--color-bg-primary)',
				secondary: 'var(--color-bg-secondary)'
			},
			textColor: {
				accent: 'var(--color-text-accent)',
				primary: 'var(--color-text-primary)',
				secondary: 'var(--color-text-secondary)'
			}
		}
	},
	plugins: []
};
