'use client'

import { useEffect, useRef, useState } from 'react'

import { MentorsSlide } from './MentorsSlide'
import { mentorItemsArr } from './mentors.data'

export const MentorsSlider = () => {
	const [activeSlide, setActiveSlide] = useState<number>(0)

	const sliderRef = useRef<HTMLDivElement>(null)

	const isMobile = useRef<boolean>(false)

	const onSlideClick = (index: number) => {
		if (!sliderRef.current || activeSlide === index || isMobile.current)
			return

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

	useEffect(() => {
		isMobile.current = matchMedia('(max-width: 949px)').matches
	}, [])

	return (
		<div
			ref={sliderRef}
			className='overflow-x-scroll scrollbar-disable flex gap-x-[20px] min-[950px]:basis-[65%] min-[1445px]:-mr-[188px] '
		>
			{mentorItemsArr.map((i, index) => (
				<MentorsSlide
					onClick={() => onSlideClick(index)}
					isActiveSlide={index === activeSlide}
					{...i}
					key={index}
				/>
			))}
		</div>
	)
}
