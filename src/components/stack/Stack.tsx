import { Container } from '../container'
import { Title } from '../ui'
import { StackSlider } from './StackSlider'

export const Stack = () => {
	return (
		<section className='mb-[250px]'>
			<Container>
				<Title variant='h4' className='mb-[17px]'>
					Your Future Tech Stack
				</Title>
				<StackSlider />
			</Container>
		</section>
	)
}
