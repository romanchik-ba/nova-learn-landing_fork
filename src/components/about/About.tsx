import { Container } from '../container'
import { Blink } from '../icons/Blink'
import { AboutBG } from '../image/AboutBG'
import { AboutMessage } from '../image/AboutMessage'
import { AboutSpin } from '../image/AboutSpin'
import { AboutSpinSmall } from '../image/AboutSpinSmall'
import { Text, Title } from '../ui'

export const About = () => {
	return (
		<section
			id='about-us'
			className='relative w-full min-h-[757px] mb-[450px] scroll-smooth'
		>
			<AboutBG className='absolute top-[-30px] left-[-650px] xq:top-[-300px] xq:left-0 h-[800px] xq:h-auto rotate-[90deg] xq:rotate-0 -z-10' />
			<Blink
				className='right-[-320px] top-[100px] xq:right-0 xq:top-[-100px] opacity-50 '
				color='#3c2571'
				width='900px'
				height='900px'
			/>
			<Blink
				className='left-[-150px] top-[-270px] xq:left-[200px] xq:top-0 opacity-50'
				color='#3c2571'
				width='900px'
				height='900px'
			/>
			<Container className='flex flex-col-reverse xq:flex-row gap-[100px] xq:gap-0'>
				<div className='xq:w-1/2 xq:pt-[270px]'>
					<div className='relative flex max-w-[250px] sq:max-w-[300px] py-[65px] mx-auto xq:ml-auto xq:mr-[30px]'>
						<AboutSpin />
						<AboutSpinSmall />
						<AboutMessage />
					</div>
				</div>
				<div className='xq:w-1/2 flex flex-col gap-[30px] ml-auto'>
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
