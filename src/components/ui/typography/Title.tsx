import { ReactNode } from 'react'

import { classNames } from '@/utils/classNames'

interface titleProps {
	variant: string
	className?: string
	children?: ReactNode
}

export const Title = ({ variant, children, className }: titleProps) => {
	const titleClasses = classNames(
		'font-montserrat leading-[105%]',
		className || ''
	)

	switch (variant) {
		case 'h1':
			return <h1 className={titleClasses}>{children}</h1>
		case 'h2':
			return <h2 className={titleClasses}>{children}</h2>
		case 'h3':
			return <h3 className={titleClasses}>{children}</h3>
		default:
			return ''
	}
}
