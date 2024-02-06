import { Container } from '../container'
import { ReviewBG } from '../image/ReviewBG'
import { Title } from '../ui'
import { ReviewSlider } from './ReviewSlider'

export const Review = () => {
	return (
		<section className='relative w-full mb-[250px]'>
			<ReviewBG />
			<Container>
				<Title className='mb-[30px] sm:mb-[120px]' variant='h2'>
					What our students say
				</Title>
				<ReviewSlider />
			</Container>
		</section>
	)
}
