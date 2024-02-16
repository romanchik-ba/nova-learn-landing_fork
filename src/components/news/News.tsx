import { Title } from '@/components/ui'

import { Container } from '../container'
import { NewsItems } from './NewsItems'

export const News = () => {
	return (
		<section
			id='news'
			className='relative w-full pb-[100px] xq:pb-[250px] my-[100px] overflow-hidden'
		>
			<Container>
				<Title variant='h2' className='mb-[25px] md:mb-0'>
					Latest news
				</Title>
				<NewsItems />
			</Container>
		</section>
	)
}
