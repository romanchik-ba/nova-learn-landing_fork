import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

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
			gridTemplateColumns: {
				news: 'repeat(2, 40%) 1fr'
			},
			gridTemplateRows: {
				news: 'repeat(3, 40%) 1fr'
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
				},
				animateBorderHorizontal: {
					'0%': {
						transform: 'translateX(300%)',
						background:
							'linear-gradient(to left, transparent, rgba(128, 81, 248, 1))'
					},
					'100%': {
						transform: 'translateX(-300%)',
						background:
							'linear-gradient(to left, transparent, rgba(0, 148, 199, 1))'
					}
				},
				animateBorderVertical: {
					'0%': {
						transform: 'translateY(300%)',
						background:
							'linear-gradient(to top, transparent, rgba(128, 81, 248, 1))'
					},
					'100%': {
						transform: 'translateY(-300%)',
						background:
							'linear-gradient(to top, transparent, rgba(0, 148, 199, 1))'
					}
				}
			},
			animation: {
				'stack-slider': 'stackSlider 20s linear infinite',
				rotate: 'rotate 40s linear infinite',
				'rotate-reverse': 'rotateReverse 30s linear infinite',
				'border-vertical': 'animateBorderVertical 30s linear infinite',
				'border-horizontal':
					'animateBorderHorizontal 30s linear infinite'
			}
		}
	},
	plugins: [
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'animate-delay': value => ({
						animationDelay: value
					})
				},
				{ values: theme('transitionDelay') }
			)
		})
	]
}
export default config
