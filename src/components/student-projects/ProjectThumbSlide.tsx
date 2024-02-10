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
		'select-none min-w-0 pr-[7px] basis-[40%] min-[440px]:basis-[35%] shrink-0 grow-0 cursor-pointer projects-slider',
		className || ''
	)

	return (
		<article
			onClick={() => onClick(index)}
			className={projectThumbSlideClassName}
		>
			<div
				className={classNames(
					'border border-solid border-[#8051F8] rounded-[20px] p-[10px] m-[8px] hover:shadow-projectThumb hover:scale-105 transition-all duration-500 pb-[62%] md:pb-[60%]'
				)}
			>
				<div className='relative p-[5px] pb-0'>
					<Image
						className='absolute top-0 left-0 block object-cover pointer-events-none rounded-[20px]'
						src={src}
						alt='image'
					/>
				</div>
			</div>
		</article>
	)
}
