import { Container } from '../container'
import { Blink } from '../icons/Blink'
import { AboutBG } from '../image/AboutBG'
import { AboutMessage } from '../image/AboutMessage'
import { AboutSpin } from '../image/AboutSpin'
import { AboutSpinSmall } from '../image/AboutSpinSmall'
import { Text, Title } from '../ui'

export const About = () => {
	return (
		<section className='relative w-full min-h-[757px] mb-[450px]'>
			<AboutBG />
			<Blink
				className='right-0 top-[-100px] opacity-50'
				color='#3c2571'
				width='900px'
				height='900px'
			/>
			<Blink
				className='left-[100px] top-0 opacity-50'
				color='#3c2571'
				width='900px'
				height='900px'
			/>
			<Container className='flex'>
				<div className='w-1/2 pt-[270px]'>
					<div className='relative flex justify-end items-center py-[65px] px-[40px]'>
						<AboutSpin />
						<AboutSpinSmall />
						<AboutMessage />
					</div>
				</div>
				<div className='w-1/2 flex flex-col gap-[30px] ml-auto'>
					<Title variant='h2' className=''>
						About us
					</Title>
					<Text>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Repudiandae nam, eaque eius iusto itaque Lorem ipsum
						dolor sit amet consectetur adipisicing elit. Repudiandae
						nam, eaque eius iusto itaque Lorem ipsum dolor sit amet
						consectetur adipisicing elit.
					</Text>
				</div>
			</Container>
		</section>
	)
}
