import { Container } from '../container'
import { AboutBG } from '../image/AboutBG'
import { AboutMessage } from '../image/AboutMessage'
import { Text, Title } from '../ui'

export const About = () => {
	return (
		<section className='relative w-full min-h-[757px] mb-[250px]'>
			<AboutBG />
			<Container className='flex'>
				<div className='w-1/2 pt-[270px]'>
					<div className='py-[65px] px-[40px]'>
						<AboutMessage />
					</div>
				</div>
				{/* <AboutSpin /> */}
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
