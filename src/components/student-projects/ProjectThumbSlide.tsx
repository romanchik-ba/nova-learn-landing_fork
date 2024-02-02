import Image, { type StaticImageData } from 'next/image'

import { classNames } from '@/utils/classNames'

export const ProjectThumbSlide = ({
	src,
	onClick,
	index,
	className
}: {
	src: StaticImageData
	onClick: (i: number) => void // eslint-disable-line no-unused-vars
	index: number
	className?: string
}) => {
	const projectThumbSlideClassName = classNames(
		'select-none min-w-0 pl-[7px] basis-[35%] shrink-0 grow-0 cursor-pointer projects-slider',
		className || ''
	)

	return (
		<article
			onClick={() => onClick(index)}
			className={projectThumbSlideClassName}
		>
			<div
				className={classNames(
					'border border-solid border-[#8051F8] rounded-[20px] p-[10px] m-[8px] hover:shadow-projectThumb hover:scale-105 transition-all duration-500'
				)}
			>
				<Image
					className='block h-[140px] w-full object-cover pointer-events-none'
					src={src}
					alt='image'
				/>
			</div>
		</article>
	)
}
