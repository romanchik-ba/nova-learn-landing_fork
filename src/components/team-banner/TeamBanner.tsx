import { Container } from '../container'
import { BlurryDot, Button, Text, Title } from '../ui'

export const TeamBanner = () => {
	return (
		<section className='w-full'>
			<Container className='flex flex-col items-center banner-team-gradient rounded-[15px] pt-[74px] pb-[31px]'>
				<BlurryDot className='banner-team-gradient' />
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
