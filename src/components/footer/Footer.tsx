import Image from 'next/image'

import LogoIcon from '@/assets/logo.svg'

import { Button } from '../ui'

export const Footer = () => {
	return (
		<div className='flex justify-between items-center w-[100%] max-w-[1065px] flex-wrap max-[631px]:justify-center gap-[20px] pb-[155px]'>
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
		</div>
	)
}
