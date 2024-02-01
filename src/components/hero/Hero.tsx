import { HeroBgBig, HeroBgSmall } from '@/components/image'
import { BlurryDot, Button, Text, Title } from '@/components/ui'

export const Hero = () => {
	return (
		<div className='flex max-w-[1065px] h-svh mt-[135px]'>
			<div className='relative flex flex-col gap-[30px] pt-[88px] pb-[44px]'>
				<Title variant='h1'>From Zero to Hero with Us</Title>
				<Text transparent className='max-w-[426px] mb-[18px]'>
					We&apos;ll Teach You All the Latest Technologies with
					Hands-On Practice
				</Text>
				<Button textIcon>Join Us</Button>
				<BlurryDot />
			</div>
			<div className='relative'>
				<div className='absolute -left-[30px] top-[50px] animate-rotate-reverse opacity-80'>
					<HeroBgSmall />
				</div>
				<div className='animate-rotate z-10'>
					<HeroBgBig />
				</div>
				<BlurryDot left='-150px' />
			</div>
		</div>
	)
}
