import { ReactNode } from 'react'

import { classNames } from '@/utils/classNames'

interface titleProps {
	className?: string
	children?: ReactNode
}

export const Text = ({ children, className }: titleProps) => {
	const textClasses = classNames(
		'text-[20px] text-secondaryText leading-[26px] font-nunitoSans',
		className || ''
	)

	return <p className={textClasses}>{children}</p>
}
