import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import { useRef } from 'react'

import { projectsItemsArr } from './projects.data'

export const ProjectSlide = ({
	src,
	setActiveSlide
}: {
	src: StaticImageData
	setActiveSlide: (slide: StaticImageData) => void // eslint-disable-line no-unused-vars
}) => {
	const slideRef = useRef<HTMLElement>(null)

	const clickSlide = () => {
		const slideIndexLabel =
			slideRef.current?.getAttribute('aria-label') || ''
		const slideIndex = +slideIndexLabel.split('/')[0] - 1

		setActiveSlide(projectsItemsArr[slideIndex].src)
	} // change active image

	return (
		<swiper-slide
			ref={slideRef}
			class='!w-auto border border-solid border-[#8051F8] rounded-[20px] select-none pointer-events-none'
		>
			<div onClick={clickSlide} className='p-[10px]'>
				<Image
					className=''
					src={src}
					alt='project'
					width={200}
					height={140}
				/>
			</div>
		</swiper-slide>
	)
}
