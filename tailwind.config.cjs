/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'beau': ['Ysabeau'],
				'josefin': ['Josefin Sans'],
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],

			}
		},
	},
	plugins: [
		require('tailwind-scrollbar')
	],
}
