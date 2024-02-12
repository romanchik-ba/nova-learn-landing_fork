import Image from 'next/image'

import { classNames } from '@/utils/classNames'

import { Text } from '../ui'

type SvgIcon = typeof import('*.svg')

interface CourseCardProps {
	src: SvgIcon
	alt: string
	CourseName: string
	CoursesQuantity: string
	className: string
}

export const CourseCard = ({
	src,
	alt,
	CourseName,
	CoursesQuantity,
	className
}: CourseCardProps) => {
	const CourseCardClasses = classNames(
		'flex items-center border border-[#8051F8] py-[35px] px-[30px] rounded-[15px] max-w-[501px] min-w-[300px] hover:bg-[#3D3570] transition active:bg-opacity-0',
		className || ''
	)

	return (
		<div className={CourseCardClasses}>
			<Image src={src} alt={alt} width={90} height={90} />
			<div className='flex flex-col p-[12px]'>
				<Text className='!text-[25px] font-semibold !text-[#fff] max-w-[135px]'>
					{CourseName}
				</Text>
				<Text className='!text-[18px]'>{CoursesQuantity}</Text>
			</div>
		</div>
	)
}
