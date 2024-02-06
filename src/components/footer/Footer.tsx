'use client'

import Image from 'next/image'

import LogoIcon from '@/assets/logo.svg'

import { Container } from '../container'
import { Button } from '../ui'
import { footerItemsArr } from './footer.data'

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
				<nav>
					<ul className='hidden gap-x-[20px] justify-center min-[700px]:flex'>
						{footerItemsArr.map(({ href, text }) => (
							<li key={text}>
								<Button link={href}>{text}</Button>
							</li>
						))}
					</ul>
				</nav>
			</Container>
		</footer>
	)
}
