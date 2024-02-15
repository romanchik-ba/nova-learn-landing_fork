import { classNames } from '@/utils/classNames'

import { Text } from '../ui'
import { WeOfferIcon } from './WeOfferIcon'

interface CourseCardProps {
	colorIcon: string
	alt: string
	CourseName: string
	CoursesQuantity: string
	className: string
}

export const CourseCard = ({
	colorIcon,
	alt,
	CourseName,
	CoursesQuantity,
	className
}: CourseCardProps) => {
	const CourseCardClasses = classNames(
		'flex justify-center sm:justify-normal md:justify-normal lg:justify-normal items-center border border-[#8051F8] py-[35px] px-[30px] rounded-[15px] max-w-[501px] min-w-[345px] sm:min-w-[300px] md:min-w-[300px] lg:min-w-[300px] hover:bg-[#3D3570] transition active:bg-opacity-0 gap-x-[10px]',
		className || ''
	)

	return (
		<div className={CourseCardClasses}>
			<WeOfferIcon alt={alt} color={colorIcon} />
			<div className='flex flex-col p-[12px]'>
				<Text className='!text-[25px] font-semibold !text-[#fff] max-w-[135px]'>
					{CourseName}
				</Text>
				<Text className='!text-[18px]'>{CoursesQuantity}</Text>
			</div>
		</div>
	)
}
