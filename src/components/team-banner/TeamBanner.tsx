import { Container } from '../container'
import { Blink } from '../icons/Blink'
import { Button, Text, Title } from '../ui'

export const TeamBanner = () => {
	return (
		<section className='w-full mb-[200px]'>
			<Container className='relative flex flex-col items-center bg-banner-team-gradient rounded-[15px] pt-[74px] pb-[31px]'>
				<Blink
					className='opacity-70 -top-[50%] -left-[15%] -z-10'
					color='#311F4D'
					width='630px'
					height='580px'
				/>
				<Text className='uppercase text-[#23DCDC] text-[30px] leading-0 mb-[53px]'>
					Are you ready?
				</Text>
				<Title
					className='max-w-[555px] text-center mb-[61px]'
					variant='h2'
				>
					Be A Part Of Next Team?
				</Title>
				<Button className='!px-[34px]'>GET STARTED</Button>
			</Container>
		</section>
	)
}
