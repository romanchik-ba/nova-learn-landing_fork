'use client'

import Autoplay, { type AutoplayType } from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { useEffect, useRef, useState } from 'react'

import { emblaScrollToSlideWithDirection } from '@/utils/emblaScrollToSlideWithDirection'

import { ProjectActive } from './ProjectActive'
import { ProjectThumbSlide } from './ProjectThumbSlide'
import { projectsItemsArr } from './projects.data'

export const ProjectSlider = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const [sliderThumbsRef, sliderThumbsRefApi] = useEmblaCarousel(
		{
			containScroll: 'keepSnaps',
			duration: 60,
			loop: true,
			align: 'start',
			watchDrag: false // disabled drag
		},
		[
			Autoplay({
				delay: 7000,
				stopOnInteraction: false // disabled stop after manual switching slide
			})
		]
	) // thumb-slider init

	const isManualChangeSlide = useRef<boolean>(false) // manual slider change state

	const onThumbClick = (index: number) => {
		// change main slide after click by thumb slide
		if (!sliderThumbsRefApi) return
		if (index !== activeIndex) {
			isManualChangeSlide.current = true // check main slide change by mouse click on thumb slide
			// @ts-ignore

			emblaScrollToSlideWithDirection(
				sliderThumbsRefApi,
				index,
				false,
				-1
			) // scroll to slide by click

			setActiveIndex(index)

			const autoplayThumbs = sliderThumbsRefApi.plugins()
				.autoplay as AutoplayType

			autoplayThumbs.reset() // reset autoplay thumb slider timer after manual switching slide

			isManualChangeSlide.current = false // reset manual slider change state
		}
	}

	const changeMainSlideByThumbSlideAutoplay = () => {
		// change main slide after thumb slider autoplay

		if (isManualChangeSlide.current || !sliderThumbsRefApi) return

		setActiveIndex(prev =>
			prev + 1 >= projectsItemsArr.length ? 0 : prev + 1
		) // if last slide -> first slide //
	}

	useEffect(() => {
		// add event listeners for sliders
		if (!sliderThumbsRefApi) return
		sliderThumbsRefApi.on('select', changeMainSlideByThumbSlideAutoplay)
	}, [sliderThumbsRefApi]) // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className='grow-0 shrink md:basis-[53%] max-w-full'>
			<div className='pointer-events-none min-[700px]:mb-[32px] mb-[20px] ml-[7px]'>
				<div className='relative pb-[70%]'>
					{projectsItemsArr.map(({ src }, index) => (
						<ProjectActive
							src={src}
							key={index}
							isActive={index === activeIndex}
						/>
					))}
				</div>
			</div>
			<div ref={sliderThumbsRef} className='overflow-hidden -mr-[200px]'>
				<div className='flex'>
					{projectsItemsArr.map(({ src }, index) => (
						<ProjectThumbSlide
							onClick={onThumbClick}
							src={src}
							key={index}
							index={index}
						/>
					))}
				</div>
			</div>
		</div>
	)
}
