import { Container } from '../container'
import { Title } from '../ui'
import { MentorsSlider } from './MentorsSlider'

export const Mentors = () => {
	return (
		<section className='w-full relative mb-[250px]'>
			<Container className='flex justify-between'>
				<Title variant='h2' className='shrink grow-0 basis-[34%]'>
					Our mentors
				</Title>
				<MentorsSlider />
			</Container>
		</section>
	)
}
