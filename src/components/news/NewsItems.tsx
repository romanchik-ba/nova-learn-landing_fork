import { BorderLines, Button } from '@/components/ui'

import { NewsItem } from './NewsItem'
import { newsArr } from './news.data'

export const NewsItems = () => {
	return (
		<div className='grid grid-cols-news transition duration-500'>
			{newsArr.map(n => (
				<NewsItem key={n.id} text={n.text} position={n.position} />
			))}
			<div className='grid md:grid-cols-subgrid col-span-3'>
				<div className='relative md:col-start-3 px-[3px] md:px-[15px] py-[25px] md:py-[15px]'>
					<Button variant='ghost'>More news</Button>
					<BorderLines top />
					<BorderLines left />
				</div>
			</div>
		</div>
	)
}
