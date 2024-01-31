'use client'

import Autoplay, { type AutoplayType } from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'

import { useCallback, useEffect, useState } from 'react'

import { ProjectSlide } from './ProjectSlide'
import { ProjectThumbSlide } from './ProjectThumbSlide'
import { projectsItemsArr } from './projects.data'

export const ProjectSlider = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0)

	const [sliderRef, sliderRefApi] = useEmblaCarousel(
		{
			loop: true
		},
		[
			Autoplay({
				delay: 7000,
				stopOnInteraction: false
			})
		]
	) // main-slider init

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

	const onThumbClick = (index: number) => {
		if (!sliderRefApi || !sliderThumbsRefApi) return
		if (index !== activeIndex) {
			sliderRefApi.scrollTo(index)
			setActiveIndex(index)
		}
	} // change main slide after click by thumb slide

	const onSelect = useCallback(() => {
		if (!sliderRefApi || !sliderThumbsRefApi) return
		sliderThumbsRefApi.scrollTo(sliderRefApi.selectedScrollSnap()) // change main slide after click by thumb slide
		const autoplayThumbs = sliderThumbsRefApi.plugins()
			.autoplay as AutoplayType
		const autoplayMain = sliderRefApi.plugins().autoplay as AutoplayType
		autoplayThumbs.reset() // reset autoplay thumb slider timer after manual switching slide
		autoplayMain.reset() // reset autoplay main slider timer after manual switching slide
	}, [sliderRefApi, sliderThumbsRefApi])

	useEffect(() => {
		if (!sliderRefApi || !sliderThumbsRefApi) return
		sliderRefApi.on('select', onSelect)
		sliderRefApi.on('reInit', onSelect)
	}, [onSelect, sliderRefApi, sliderThumbsRefApi]) // add event listeners for main slider

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
