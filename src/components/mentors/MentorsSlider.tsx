'use client'

import { type MouseEvent, useEffect, useRef, useState } from 'react'

import { MentorsSlide } from './MentorsSlide'
import { mentorItemsArr } from './mentors.data'

export const MentorsSlider = () => {
	const [activeSlide, setActiveSlide] = useState<number>(0)

	const sliderRef = useRef<HTMLDivElement>(null)

	const onSlideClick = (e: MouseEvent<HTMLDivElement>, index: number) => {
		if (!sliderRef.current || activeSlide === index) return
		setActiveSlide(index)
	}

	const scrollSlide = (e: WheelEvent) => {
		e.preventDefault()
		if (sliderRef.current) {
			sliderRef.current.scrollLeft += e.deltaY
		}
	}

	useEffect(() => {
		const slider = sliderRef.current

		slider?.addEventListener('wheel', scrollSlide, {
			passive: false
		})

		return () => {
			slider?.removeEventListener('wheel', scrollSlide)
		}
	}, [])

	return (
		<div
			ref={sliderRef}
			className='-mr-[200px] overflow-x-hidden scrollbar-disable flex gap-x-[20px] basis-[65%]'
		>
			{mentorItemsArr.map((i, index) => (
				<MentorsSlide
					onClick={(e: MouseEvent<HTMLDivElement>) =>
						onSlideClick(e, index)
					}
					isActiveSlide={index === activeSlide}
					{...i}
					key={index}
				/>
			))}
		</div>
	)
}
