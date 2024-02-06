'use client'

import Image from 'next/image'

import LogoIcon from '@/assets/logo.svg'

import { Container } from '../container'
import { Button } from '../ui'

export const Footer = () => {
	const scrollToTop = () => {
		scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<footer>
			<Container className='flex items-center justify-center min-[700px]:justify-between gap-x-[20px] p-[30px]'>
				<div onClick={scrollToTop}>
					<Image src={LogoIcon} width={121} height={40} alt='logo' />
				</div>
				<div className='hidden gap-x-[20px] justify-center min-[700px]:flex'>
					<Button link='#'>Courses</Button>
					<Button link='#'>About us</Button>
					<Button link='#'>Our mentors</Button>
					<Button link='#'>Projects</Button>
					<Button link='#'>News</Button>
				</div>
			</Container>
		</footer>
	)
}
