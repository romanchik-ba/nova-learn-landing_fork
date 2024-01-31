import { classNames } from '@/utils/classNames'

type BlurryDotProps = {
	className?: string
	left?: string
	top?: string
	right?: string
	bottom?: string
}

export const BlurryDot = ({
	className,
	left = '0px',
	top = '0px',
	right,
	bottom
}: BlurryDotProps) => {
	return (
		<div
			style={{
				left,
				top,
				right,
				bottom
			}}
			className={classNames(
				`absolute w-[550px] h-[550px] bg-radial-gradient blur-[200px] -z-20`,
				className || ''
			)}
		></div>
	)
}
