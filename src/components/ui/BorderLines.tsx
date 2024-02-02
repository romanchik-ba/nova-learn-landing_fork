import { classNames } from '@/utils/classNames'

type BorderLinesProps = {
	left?: boolean
	top?: boolean
}

export const BorderLines = ({ left, top }: BorderLinesProps) => {
	return (
		<div
			className={classNames(
				"after:content-[''] after:absolute after:top-0 after:left-0 after:-z-10 after:opacity-50 after:animate-delay-[15s] before:content-[''] before:absolute before:top-0 before:left-0 before:-z-10 before:opacity-50",
				top
					? 'after:w-[400px] after:h-[1px] after:animate-border-horizontal before:w-[400px] before:h-[1px] before:animate-border-horizontal'
					: '',
				left
					? 'after:h-[400px] after:w-[1px] after:animate-border-vertical before:h-[400px] before:w-[1px] before:animate-border-vertical'
					: ''
			)}
		></div>
	)
}
