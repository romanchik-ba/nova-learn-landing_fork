import { Title } from '../ui'
import { ReviewSlider } from './ReviewSlider'

export const Review = () => {
	return (
		<section className='w-full'>
			<Title className='mb-[120px]' variant='h3'>
				What our student say
			</Title>
			<ReviewSlider />
		</section>
	)
}
