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

		variant === 'h1'
			? 'text-[42px] font-bold leading-[50px] md:leading-[84px] sm:text-[48px] md:text-[64px] lg:text-[80px]'
			: '',
		variant === 'h2'
			? 'text-[42px] font-bold leading-[68px] sm:text-[48px] md:text-[64px]'
			: '',
		variant === 'h3'
			? 'text-[28px] font-bold leading-[68px] sm:text-[36px] md:text-[48px]'
			: '',
		variant === 'h4'
			? 'text-[24px] font-bold leading-[34px] sm:text-[28px] md:text-[32px]'
			: '',
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
