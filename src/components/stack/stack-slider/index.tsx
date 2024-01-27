import { StackSlide } from '../stack-slide'
import { stackSlidesArr } from '../stack.data'
import './index.scss'

export const StackSlider = () => {
	return (
		<div className='stack-slider'>
			<div className='px-[18px] whitespace-nowrap overflow-hidden'>
				<div className='stack-slider-group'>
					{stackSlidesArr.map(s => (
						<StackSlide {...s} key={s.alt} />
					))}
				</div>
				<div className='stack-slider-group'>
					{stackSlidesArr.map(s => (
						<StackSlide {...s} key={s.alt} />
					))}
				</div>
			</div>
		</div>
	)
}
