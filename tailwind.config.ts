import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			colors: {
				mainBackground: '#181223',
				mainText: '#fff',
				secondaryText: 'rgba(255, 255, 255, 0.70)',
				mainLinkText: '#1FC6C6',
				secondaryLinkText: '#7FCBCC'
			},
			fontFamily: {
				inter: ['var(--font-inter)'],
				montserrat: ['var(--font-montserrat)'],
				nunitoSans: ['var(--font-nunitoSans']
			}
		}
	},
	plugins: []
}
export default config
