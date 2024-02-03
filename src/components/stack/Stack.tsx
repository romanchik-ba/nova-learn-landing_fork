import { Container } from '../container'
import { BlurryDot, Title } from '../ui'
import { StackSlider } from './StackSlider'

export const Stack = () => {
	return (
		<section className='relative w-full pb-[1250px]'>
			<BlurryDot
				color='rgba(33, 18, 64, 0.74)'
				left='-240px'
				top='-140px'
			/>
			<BlurryDot
				color='rgba(77, 26, 101, 0.93)'
				right='-240px'
				top='-140px'
			/>

			<Container>
				<Title variant='h4' className='mb-[17px]'>
					Your Future Tech Stack
				</Title>
				<StackSlider />
			</Container>
		</section>
	)
}
