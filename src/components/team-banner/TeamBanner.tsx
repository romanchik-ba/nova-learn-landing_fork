import { BlurryDot, Button, Text, Title } from '../ui'

export const TeamBanner = () => {
	return (
		<section className='w-full '>
			<div className='flex relative flex-col items-center pt-[72px] pb-[34px] '>
				<BlurryDot className='banner-team-gradient w-full !h-[443px]' />
				<Text className='!font-montserrat text-[32px] mb-[53px] !text-[#23DCDC]'>
					ARE YOU READY?
				</Text>
				<Title
					className='max-w-[540px] text-center mb-[61px]'
					variant='h2'
				>
					Be A Part Of Next Team?
				</Title>
				<Button>GET STARTED</Button>
			</div>
		</section>
	)
}
