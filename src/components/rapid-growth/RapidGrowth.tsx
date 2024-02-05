import Image from 'next/image'

import BlinkImage from '@/assets/rapid-growth-glow.svg'
import StairsImage from '@/assets/rapid-growth-stairs.svg'
import VaweImage from '@/assets/rapid-growth.svg'

import { Container } from '../container'
import { Text, Title } from '../ui'

export const RapidGrowth = () => {
	return (
		<section className='mb-[250px]'>
			<Container className='relative'>
				<Image
					className='absolute bottom-0 left-[-2.5px] object-cover w-full h-[82%]'
					src={StairsImage}
					alt='Image №2'
				/>
				<Image
					className='absolute left-[315px] bottom-[390px]'
					src={BlinkImage}
					alt='Image №3'
				/>

				<div className='flex gap-x-[110px]'>
					<div className='shrink-0 flex-grow basis-[40%]'>
						<Image
							className='object-cover h-full w-full'
							src={VaweImage}
							alt='Image №1'
						/>
					</div>
					<div className='mb-[105px] basis-[55%] shrink-0 flex-grow'>
						<Title className='mb-[30px]' variant='h2'>
							Rapid Growth Awaits
						</Title>
						<Text className='max-w-[440px]'>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Repudiandae nam, eaque eius iusto itaque Lorem
							ipsum dolor sit amet consectetur adipisicing elit.
							Repudiandae nam, eaque eius iusto itaque Lorem ipsum
							dolor sit amet consectetur adipisicing elit.
						</Text>
					</div>
				</div>
			</Container>
		</section>
	)
}
