import { Button, Text, Title } from '../ui'

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
						<div className='border-animation-left'></div>
						<div className='border-animation-top'></div>
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
						<div className='border-animation-top'></div>
						<div className='border-animation-left'></div>
					</div>
				</div>
				<div className='grid grid-cols-subgrid col-span-3'>
					<div className='relative col-start-3 p-[15px]'>
						<Button variant='ghost'>More news</Button>
						<div className='border-animation-top'></div>
						<div className='border-animation-left'></div>
					</div>
				</div>
			</div>
		</section>
	)
}
