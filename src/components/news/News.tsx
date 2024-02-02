import { Button, Text, Title } from '../ui'
import { BorderLines } from '../ui/BorderLines'

export const News = () => {
	return (
		<section className='w-[1065px]  overflow-hidden'>
			<Title variant='h2' className='col-span-3'>
				Latest news
			</Title>
			<div className='grid grid-cols-news grid-rows-news gap-2 transition duration-500'>
				<div className='grid grid-cols-subgrid col-span-3'>
					<div className='relative col-start-1 p-[15px]'>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Repudiandae nam, eaque eius iusto itaque Lorem
							ipsum dolor sit amet consectetur adipisicing elit.
							Repudiandae nam, eaque eius iusto taque
						</Text>
						<BorderLines top />
						<BorderLines left />
					</div>
				</div>
				<div className='grid grid-cols-subgrid col-span-3'>
					<div className='relative col-start-2 p-[15px]'>
						<Text>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Repudiandae nam, eaque eius iusto itaque Lorem
							ipsum dolor sit amet consectetur adipisicing elit.
							Repudiandae nam, eaque eius iusto itaque
						</Text>
						<BorderLines top />
						<BorderLines left />
					</div>
				</div>
				<div className='grid grid-cols-subgrid col-span-3'>
					<div className='relative col-start-3 p-[15px]'>
						<Button variant='ghost'>More news</Button>
						<BorderLines top />
						<BorderLines left />
					</div>
				</div>
			</div>
		</section>
	)
}
