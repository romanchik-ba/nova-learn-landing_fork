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
				accent: '#1FC6C6'
			},
			boxShadow: {
				neon: '0px 0px 4px 2px rgba(31,198,198,0.50)'
			},
			keyframes: {
				stackSlider: {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(-100%)'
					}
				}
			},
			animation: {
				'stack-slider': 'stackSlider 20s linear infinite'
			}
		}
	},
	plugins: []
}
export default config
