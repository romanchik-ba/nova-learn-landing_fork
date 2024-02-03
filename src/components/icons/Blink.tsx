import { classNames } from '@/utils/classNames'

export const Blink = ({
	className,
	color,
	width,
	height
}: {
	className: string
	color: string
	width: string
	height: string
}) => {
	const blinkClassName = classNames('absolute', className ?? '')

	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='1023'
			height='1392'
			fill='none'
			viewBox='0 0 1023 1392'
			className={blinkClassName}
			style={{ width, height }}
		>
			<g filter='url(#filter0_f_145_228)'>
				<ellipse
					cx='304'
					cy='696'
					fill={color}
					fillOpacity='0.7'
					rx='314'
					ry='291'
				></ellipse>
			</g>
			<defs>
				<filter
					id='filter0_f_145_228'
					width='1436.8'
					height='1390.8'
					x='-414.4'
					y='0.6'
					colorInterpolationFilters='sRGB'
					filterUnits='userSpaceOnUse'
				>
					<feFlood
						floodOpacity='0'
						result='BackgroundImageFix'
					></feFlood>
					<feBlend
						in='SourceGraphic'
						in2='BackgroundImageFix'
						result='shape'
					></feBlend>
					<feGaussianBlur
						result='effect1_foregroundBlur_145_228'
						stdDeviation='202.2'
					></feGaussianBlur>
				</filter>
			</defs>
		</svg>
	)
}
