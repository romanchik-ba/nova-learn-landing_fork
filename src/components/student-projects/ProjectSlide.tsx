import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import { classNames } from '@/utils/classNames'

export const ProjectSlide = ({
	src,
	className,
	imageClassName,
	onClick,
	isThumb
}: {
	src: StaticImageData
	className?: string
	imageClassName: string
	onClick?: () => void
	isThumb?: boolean
}) => {
	const projectSlideClassName = classNames(
		'select-none min-w-0',
		className || ''
	)

	return (
		<div onClick={onClick} className={projectSlideClassName}>
			<div
				className={classNames(
					'border border-solid border-[#8051F8] rounded-[20px]',
					isThumb
						? 'p-[10px] m-[8px] hover:shadow-projectThumb hover:scale-105 transition-all duration-500'
						: ''
				)} // if thumb - add hover effect
			>
				<Image className={imageClassName} src={src} alt='image' />
			</div>
		</div>
	)
}
