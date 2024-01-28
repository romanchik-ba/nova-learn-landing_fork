import { ReactNode } from 'react'

import { classNames } from '@/utils/classNames'

interface titleProps {
	variant: string
	size: string
	className?: string | any
	children?: ReactNode
}

export const Title = ({ variant, children, size, className }: titleProps) => {
	const titleClasses = classNames(
		size === 'default' ? 'text-[16px]' : '',
		size === 'big' ? 'text-[80px]' : '',
		size === 'normal' ? 'text-[64px]' : '',
		size === 'middle' ? 'text-[48px]' : '',
		size === 'small' ? 'text-[32px]' : '',
		className
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
