'use client'

import Autoplay, { type AutoplayType } from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { useCallback, useEffect, useRef, useState } from 'react'

import { emblaScrollToSlideWithDirection } from '@/utils/emblaScrollToSlideWithDirection'

import { ReviewSlide } from './ReviewSlide'
import { reviewItemsArr } from './review.data'

export const ReviewSlider = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const sliderBodyRef = useRef<HTMLDivElement>(null)
	const isManualSlideChange = useRef<boolean>(false)

	const [sliderReviewRef, sliderReviewApi] = useEmblaCarousel(
		{
			loop: true,
			containScroll: 'keepSnaps',
			align: 'start'
		},
		[
			Autoplay({
				delay: 15000,
				stopOnInteraction: false
			})
		]
	)

	const onSlideClick = useCallback(
		(index: number) => {
			if (!sliderReviewApi) return

			if (index !== activeIndex) {
				isManualSlideChange.current = true
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
				isManualSlideChange.current = false
			}
		},
		[sliderReviewApi, activeIndex]
	)

	const autoplayChangeSlideHandler = () => {
		// ONLY AUTOPLAY SCROLL
		if (isManualSlideChange.current || !sliderReviewApi) return

		setActiveIndex(prev => {
			return prev + 1 >= reviewItemsArr.length ? 0 : prev + 1
		}) // if last slide -> first slide
	}

	useEffect(() => {
		// add events to slider
		if (!sliderReviewApi) return
		sliderReviewApi.on('select', autoplayChangeSlideHandler)
	}, [sliderReviewApi]) // eslint-disable-line react-hooks/exhaustive-deps

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
