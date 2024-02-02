import type { StaticImageData } from 'next/image'
import Image from 'next/image'

import { classNames } from '@/utils/classNames'

export const ProjectActive = ({
	src,
	isActive
}: {
	src: StaticImageData
	isActive: boolean
}) => {
	const projectClassNames = classNames(
		'transition-all duration-[1500ms] absolute top-0 left-0 select-none min-w-0 invisible opacity-0',
		isActive ? '!visible opacity-100' : ''
	)

	return (
		<div className={projectClassNames}>
			<div className='border border-solid border-[#8051F8] bg-[#181223] rounded-[20px]'>
				<Image className='w-[560px] h-[380px]' src={src} alt='image' />
			</div>
		</div>
	)
}
