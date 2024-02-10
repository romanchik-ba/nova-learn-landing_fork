import { Container } from '../container'
import { Blink } from '../icons/Blink'
import { Button, Text, Title } from '../ui'

export const TeamBanner = () => {
	return (
		<section className='w-full mb-[200px]'>
			<Container className='relative flex flex-col items-center bg-banner-team-gradient rounded-[15px] pt-[74px] pb-[31px]'>
				<Blink
					className='opacity-[70%] -top-[50%] -left-[15%] -z-10'
					color='#311F4D'
					width='630px'
					height='580px'
				/>
				<Text className='uppercase !text-[#23DCDC] text-[24px] leading-0 mb-[40px] sm:text-[30px] md:text-[30px] lg:text-[30px] sm:mb-[53px] md:mb-[53px] lg:mb-[53px]'>
					Are you ready?
				</Text>
				<Title
					className='max-w-[249px] text-center mb-[40px] text-[42px] sm:text-[64px] md:text-[64px] lg:text-[64px] sm:max-w-[544px] md:max-w-[544px] lg:max-w-[544px] sm:mb-[61px] md:mb-[61px] lg:mb-[61px]'
					variant='h2'
				>
					Be A Part Of Next Team?
				</Title>
				<Button className='!px-[34px] mb-[23px] sm:mb-[0px] md:mb-[0px] lg:mb-[0px]'>
					GET STARTED
				</Button>
			</Container>
		</section>
	)
}
