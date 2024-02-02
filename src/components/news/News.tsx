import { Title } from '@/components/ui'

import { Container } from '../container'
import { NewsItems } from './NewsItems'

export const News = () => {
	return (
		<section className='relative w-full mt-96 overflow-hidden'>
			<Container>
				<Title variant='h2' className='col-span-3'>
					Latest news
				</Title>
				<NewsItems />
			</Container>
		</section>
	)
}
