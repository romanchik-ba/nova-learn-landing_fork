import { ReactNode } from 'react'

import { classNames } from '@/utils/classNames'

interface titleProps {
	className?: string | any
	children?: ReactNode
	transparent?: boolean
}

export const Text = ({ children, className, transparent }: titleProps) => {
	const textClasses = classNames(
		'text-mainText leading-[150%]',
		transparent ? 'opacity-[70%]' : '',

		className
	)

	return <p className={textClasses}>{children}</p>
}
