import { Container } from '../container'
import { Title } from '../ui'
import { MentorsSlider } from './MentorsSlider'

export const Mentors = () => {
	return (
		<section id='our-mentors' className='w-full relative mb-[250px]'>
			<Container className='flex flex-col justify-between min-[950px]:gap-x-[40px] min-[950px]:flex-row'>
				<Title
					variant='h2'
					className='shrink grow-0 basis-[34%] mb-[30px] min-[950px]:mb-0'
				>
					Our mentors
				</Title>
				<MentorsSlider />
			</Container>
		</section>
	)
}
