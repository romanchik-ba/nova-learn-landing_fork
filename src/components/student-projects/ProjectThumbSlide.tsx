import type { StaticImageData } from 'next/image'

import { ProjectSlide } from './ProjectSlide'

export const ProjectThumbSlide = ({
	src,
	onClick,
	index
}: {
	src: StaticImageData
	onClick: (i: number) => void // eslint-disable-line no-unused-vars
	index: number
}) => {
	return (
		<ProjectSlide
			onClick={() => onClick(index)}
			className='pl-[7px] basis-[40%] shrink-0 grow-0 cursor-pointer'
			imageClassName='block h-[140px] w-full object-cover pointer-events-none'
			src={src}
			isThumb
		/>
	)
}
