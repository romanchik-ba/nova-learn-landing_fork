'use client'

import Autoplay, { type AutoplayType } from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { useCallback, useRef, useState } from 'react'

import { emblaScrollToSlideWithDirection } from '@/utils/emblaScrollToSlideWithDirection'

import { ReviewSlide } from './ReviewSlide'
import { reviewItemsArr } from './review.data'

export const ReviewSlider = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const sliderBodyRef = useRef<HTMLDivElement>(null)

	const [sliderReviewRef, sliderReviewApi] = useEmblaCarousel(
		{
			loop: true,
			containScroll: 'keepSnaps',
			align: 'start'
		},
		[
			Autoplay({
				delay: 7000,
				stopOnInteraction: false
			})
		]
	)

	const onSlideClick = useCallback(
		(index: number) => {
			if (!sliderReviewApi) return

			if (index !== activeIndex) {
				emblaScrollToSlideWithDirection(
					sliderReviewApi,
					index,
					false,
					-1
				)

				const autoplaySlider = sliderReviewApi.plugins()
					.autoplay as AutoplayType

				autoplaySlider.reset()

				setActiveIndex(index)
			}
		},
		[sliderReviewApi, activeIndex]
	)

	return (
		<div className='overflow-hidden -mr-[200px]' ref={sliderReviewRef}>
			<div className='flex' ref={sliderBodyRef}>
				{reviewItemsArr.map((i, index) => (
					<ReviewSlide
						index={index}
						onClick={onSlideClick}
						{...i}
						key={index}
					/>
				))}
			</div>
		</div>
	)
}
