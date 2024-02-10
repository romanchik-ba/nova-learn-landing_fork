import { classNames } from '@/utils/classNames'

type BorderLinesProps = {
	left?: boolean
	top?: boolean
	className?: string
	delay?: string
}

export const BorderLines = ({
	left,
	top,
	className,
	delay = 'default'
}: BorderLinesProps) => {
	return (
		<div
			className={classNames(
				`after:content-[''] after:absolute after:top-0 after:left-0 after:-z-30 md:after:opacity-50 before:content-[''] before:absolute before:top-0 before:left-0 before:-z-30 md:before:opacity-50`,
				top
					? 'after:w-[400px] after:h-[1px] after:animate-border-horizontal before:w-[400px] before:h-[1px] before:animate-border-horizontal'
					: '',
				left
					? 'after:h-[400px] after:w-[1px] after:animate-border-vertical before:h-[400px] before:w-[1px] before:animate-border-vertical'
					: '',
				delay === 'default' ? `after:animate-delay-[15s]` : '',
				delay === 'long'
					? `after:animate-delay-[20s] before:animate-delay-[10s]`
					: '',
				delay === 'middle'
					? `after:animate-delay-[25s] before:animate-delay-[5s]`
					: '',
				className ? className : ''
			)}
		></div>
	)
}
