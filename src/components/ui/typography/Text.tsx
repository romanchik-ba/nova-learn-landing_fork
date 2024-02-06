import { ReactNode } from 'react'

import { classNames } from '@/utils/classNames'

interface titleProps {
	className?: string
	children?: ReactNode
}

export const Text = ({ children, className }: titleProps) => {
	const textClasses = classNames(
		'text-[14px] text-secondaryText leading-[26px] font-nunitoSans sm:text-[16px] md:text-[18px] lg:text-[20px]',
		className || ''
	)

	return <p className={textClasses}>{children}</p>
}
