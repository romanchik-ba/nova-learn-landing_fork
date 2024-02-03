import { classNames } from '@/utils/classNames'

type BlurryDotProps = {
	className?: string
	color: string
	left?: string
	top?: string
	right?: string
	bottom?: string
}

export const BlurryDot = ({
	className,
	color,
	left,
	top,
	right,
	bottom
}: BlurryDotProps) => {
	return (
		<span
			style={{
				left,
				top,
				right,
				bottom,
				background: `radial-gradient(closest-side, ${color} 60%, transparent 60%)`
			}}
			className={classNames(
				`absolute w-[550px] h-[550px] blur-[200px] -z-20`,
				className || ''
			)}
		></span>
	)
}
