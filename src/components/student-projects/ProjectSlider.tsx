import { register } from 'swiper/element/bundle'

import { StaticImageData } from 'next/image'
import { useEffect } from 'react'

import { ProjectSlide } from './ProjectSlide'
import { projectsItemsArr } from './projects.data'

const ProjectSlider = (props: {
	setActiveSlide: (slide: StaticImageData) => void // eslint-disable-line no-unused-vars
}) => {
	useEffect(() => {
		register()
	}, [])

	return (
		<swiper-container
			slides-per-view='auto'
			space-between='12'
			allow-touch-move={false}
			slide-next-class='project-next-slide'
			slide-to-clicked-slide
			loop
			class='self-start'
		>
			{projectsItemsArr.map(({ src }, index) => (
				<ProjectSlide {...props} key={index} src={src} />
			))}
		</swiper-container>
	)
}

//eslint-disable-next-line import/no-default-export
export default ProjectSlider
