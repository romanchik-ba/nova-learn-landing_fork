'use client'

import Autoplay, { type AutoplayType } from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { useCallback, useEffect, useRef, useState } from 'react'

import { ProjectSlide } from './ProjectSlide'
import { ProjectThumbSlide } from './ProjectThumbSlide'
import { projectsItemsArr } from './projects.data'

export const ProjectSlider = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const [sliderRef, sliderRefApi] = useEmblaCarousel({
		loop: true
	}) // main-slider init

	const [sliderThumbsRef, sliderThumbsRefApi] = useEmblaCarousel(
		{
			containScroll: 'keepSnaps',
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

	const isManualChangeSlide = useRef<boolean>(false)

	const onThumbClick = (index: number) => {
		// change main slide after click by thumb slide
		if (!sliderRefApi || !sliderThumbsRefApi) return
		if (index !== activeIndex) {
			isManualChangeSlide.current = true // check main slide change by mouse click on thumb slide
			sliderRefApi.scrollTo(index)
			setActiveIndex(index)
		}
	}

	const onSelect = useCallback(() => {
		if (
			!sliderRefApi ||
			!sliderThumbsRefApi ||
			!isManualChangeSlide.current // check main slide change by thumb slide autoplay
		)
			return

		sliderThumbsRefApi.scrollTo(sliderRefApi.selectedScrollSnap()) // change thumb slide after click by thumb slide

		isManualChangeSlide.current = false // reset mouse event state

		const autoplayThumbs = sliderThumbsRefApi.plugins()
			.autoplay as AutoplayType

		autoplayThumbs.reset() // reset autoplay thumb slider timer after manual switching slide
	}, [sliderRefApi, sliderThumbsRefApi])

	const changeMainSlideByThumbSlideAutoplay = () => {
		// change main slide after thumb slider autoplay

		if (isManualChangeSlide.current || !sliderRefApi || !sliderThumbsRefApi)
			return
		sliderRefApi.scrollTo(sliderThumbsRefApi.selectedScrollSnap())
	}

	useEffect(() => {
		// add event listeners for sliders
		if (!sliderRefApi || !sliderThumbsRefApi) return
		sliderRefApi.on('select', onSelect)
		sliderRefApi.on('reInit', onSelect)
		sliderThumbsRefApi.on('select', changeMainSlideByThumbSlideAutoplay)
	}, [onSelect, sliderRefApi, sliderThumbsRefApi]) // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className='grow-0 shrink basis-[53%] max-w-full'>
			<div
				className='overflow-hidden pointer-events-none mb-[32px] ml-[15px]'
				ref={sliderRef}
			>
				<div className='flex'>
					{projectsItemsArr.map(({ src }, index) => (
						<ProjectSlide
							imageClassName='w-[560px] h-[380px]'
							className='shrink-0 grow-0 basis-full'
							src={src}
							key={index}
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
