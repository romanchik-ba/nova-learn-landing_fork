import { Container } from '../container'
import { ReviewBG } from '../image/ReviewBG'
import { Title } from '../ui'
import { ReviewSlider } from './ReviewSlider'

export const Review = () => {
	return (
		<section className='relative w-full pb-[500px] mb-[-250px]'>
			<ReviewBG />
			<Container>
				<Title className='mb-[120px]' variant='h3'>
					What our student say
				</Title>
				<ReviewSlider />
			</Container>
		</section>
	)
}
