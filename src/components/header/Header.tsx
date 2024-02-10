import Image from 'next/image'

import Logo from '../../assets/logo.svg'
import { Container } from '../container'
import { Button } from '../ui'
import { headerNavItemsArr } from './header.data'

export const Header = () => {
	return (
		<header className='w-full pt-[22px]'>
			<Container className='flex justify-between items-center'>
				<div>
					<Image src={Logo} alt='Logo'></Image>
				</div>
				<nav>
					<ul className='flex gap-x-[20px]'>
						{headerNavItemsArr.map(({ href, text }) => (
							<li key={href}>
								<Button link={href}>{text}</Button>
							</li>
						))}
					</ul>
				</nav>
				<Button
					className='border !border-solid border-[#D9D9D9] rounded-[10px] text-[#D9D9D9] py-[11px] px-[7px] hover:border-accent'
					link='#'
				>
					Sign Up
				</Button>
			</Container>
		</header>
	)
}
