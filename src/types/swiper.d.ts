import type { SwiperProps, SwiperSlideProps } from 'swiper/react'

import React from 'react'

declare global {
	namespace JSX {
		interface IntrinsicElements {
			'swiper-container': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> &
					SwiperProps & {
						class?: HTMLAttributes<HTMLElement>['className']
					},
				HTMLElement
			>
			'swiper-slide': React.DetailedHTMLProps<
				React.HTMLAttributes<HTMLElement> &
					SwiperSlideProps & {
						class?: HTMLAttributes<HTMLElement>['className']
					},
				HTMLElement
			>
		}
	}
}
