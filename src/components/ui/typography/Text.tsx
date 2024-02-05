import { ReactNode } from 'react'

import { classNames } from '@/utils/classNames'

interface titleProps {
	className?: string
	children?: ReactNode
	transparent?: boolean
}

export const Text = ({ children, className, transparent }: titleProps) => {
	const textClasses = classNames(
		'text-[21px] text-mainText leading-[31.5px] font-nunitoSans sm:text-[16px] md:text-[18px] lg:text-[21px]',
		transparent ? 'opacity-[70%]' : '',

		className || ''
	)

	return <p className={textClasses}>{children}</p>
}
