import { StackSlide } from '../stack-slide'
import { stackSlidesArr } from '../stack.data'

export const StackSlider = () => {
	return (
		<div className='bg-[#302a56] group/stack-body border border-solid border-[#6F62AA] rounded-[10px]'>
			<div className='px-[18px] whitespace-nowrap overflow-hidden'>
				<div className='group-hover/stack-body:animate-paused inline-block animate-stack-slider'>
					{stackSlidesArr.map(s => (
						<StackSlide {...s} key={s.alt} />
					))}
				</div>
				<div className='group-hover/stack-body:animate-paused inline-block animate-stack-slider'>
					{stackSlidesArr.map(s => (
						<StackSlide {...s} key={s.alt} />
					))}
				</div>
			</div>
		</div>
	)
}
