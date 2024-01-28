import { ReactNode } from 'react'

import { classNames } from '@/utils/classNames'

interface titleProps {
	variant: string
	children: ReactNode
}

export const Title = ({ variant, children }: titleProps) => {
	const titleClasses = classNames('text-mainText')

	switch (variant) {
		case 'h1':
			return (
				<h1 className={`${titleClasses} font-nunitoSans`}>
					{children}
				</h1>
			)
		case 'h2':
			return <h2 className={titleClasses}>{children}</h2>
		case 'h3':
			return <h3 className={titleClasses}>{children}</h3>
		default:
			return ''
	}
}
