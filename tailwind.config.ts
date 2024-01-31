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
			backgroundImage: {
				'radial-gradient':
					'radial-gradient(closest-side, rgba(80, 65, 147, 20) 60%, transparent 60%)'
			},
			keyframes: {
				stackSlider: {
					'0%': {
						transform: 'translateX(0)'
					},
					'100%': {
						transform: 'translateX(-100%)'
					}
				},
				rotate: {
					'0%': {
						transform: 'rotate(0deg)'
					},

					'100%': {
						transform: 'rotate(360deg)'
					}
				},
				rotateReverse: {
					'100%': {
						transform: 'rotate(0deg)'
					},

					'0%': {
						transform: 'rotate(360deg)'
					}
				}
			},
			animation: {
				'stack-slider': 'stackSlider 20s linear infinite',
				rotate: 'rotate 40s linear infinite',
				'rotate-reverse': 'rotateReverse 30s linear infinite'
			}
		}
	},
	plugins: []
}
export default config
