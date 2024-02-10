import { Container } from '@/components/container'
import { HeroBgBig, HeroBgSmall } from '@/components/image'
import { Button, Text, Title } from '@/components/ui'

export const Hero = () => {
	return (
		<section className='mt-[50px] xq:mt-[68px] mb-[75px] xq:mb-[200px]'>
			<Container className='flex flex-col xq:flex-row sm:gap-3'>
				<div className='relative flex flex-col gap-[30px] max-w-[80%] xq:pt-[88px] xq:pb-[44px]'>
					<Title variant='h1'>From Zero to Hero with Us</Title>
					<Text className='max-w-[426px] mb-[18px]'>
						We&apos;ll Teach You All the Latest Technologies with
						Hands-On Practice
					</Text>
					<Button textIcon>Join Us</Button>
				</div>
				<div className='relative mx-auto'>
					<div className='absolute left-[210px] top-[-30px] sq:left-[270px] sq:top-[-60px] xq:left-[-30px] xq:top-[50px] animate-rotate-reverse xq:opacity-80'>
						<HeroBgSmall className='w-[140px] h-[140px] sq:w-[200px] sq:h-[200px]' />
					</div>
					{/* <div className='w-[300px] h-[300px] animate-rotate z-10'> */}
					<HeroBgBig className='w-[350px] h-[350px] sq:w-[500px] sq:h-[500px] animate-rotate' />
					{/* </div> */}
				</div>
			</Container>
		</section>
	)
}
