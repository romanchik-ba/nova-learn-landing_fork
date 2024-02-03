import Image from 'next/image'

import LogoIcon from '@/assets/logo.svg'

import { Container } from '../container'
import { Button } from '../ui'

export const Footer = () => {
	return (
		<Container className='flex justify-between items-center flex-wrap max-[631px]:justify-center gap-[20px] pb-[155px]'>
			<div className='max-[630.40px]:hidden'>
				<Image src={LogoIcon} width={121} height={40} alt='logo' />
			</div>
			<div className='flex gap-[20px] flex-wrap justify-center'>
				<Button link='#'>Courses</Button>
				<Button link='#'>About us</Button>
				<Button link='#'>Our mentors</Button>
				<Button link='#'>Projects</Button>
				<Button link='#'>News</Button>
			</div>
		</Container>
	)
}
