import { ReactNode } from 'react'

import { classNames } from '@/utils/classNames'

interface titleProps {
	variant: string
	className?: string
	children?: ReactNode
}

export const Title = ({ variant, children, className }: titleProps) => {
	const titleClasses = classNames(
		'text-mainText font-montserrat leading-[105%]',

		variant === 'h1' ? 'text-[80px] font-bold leading-[84px]' : '',
		variant === 'h2' ? 'text-[64px] font-bold leading-[68px]' : '',
		variant === 'h3' ? 'text-[48px] font-bold leading-[68px]' : '',
		variant === 'h4' ? 'text-[32px] font-bold leading-[34px]' : '',
		className || ''
	)

	switch (variant) {
		case 'h1':
			return <h1 className={titleClasses}>{children}</h1>
		case 'h2':
			return <h2 className={titleClasses}>{children}</h2>
		case 'h3':
			return <h3 className={titleClasses}>{children}</h3>
		case 'h4':
			return <h4 className={titleClasses}>{children}</h4>
		default:
			return ''
	}
}
