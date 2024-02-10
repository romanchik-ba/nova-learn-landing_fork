import { classNames } from '@/utils/classNames'

import { Button } from '../ui'
import { headerNavItemsArr } from './header.data'

export const HeaderMenuBurger = ({
	isMenuOpen,
	setIsMenuOpen
}: {
	isMenuOpen: boolean
	setIsMenuOpen: (o: boolean) => void // eslint-disable-line no-unused-vars
}) => {
	return (
		<div
			onClick={e => e.stopPropagation()}
			className='min-[860px]:hidden relative'
		>
			<div onClick={() => setIsMenuOpen(!isMenuOpen)}>
				<span
					className={classNames(
						'h-[2px] w-[20px] block mb-[6px] transition-all duration-1000',
						isMenuOpen ? 'bg-[#24E0E0]' : 'bg-[#fff]'
					)}
				/>
				<span
					className={classNames(
						'h-[2px] w-[12px] block mb-[6px] transition-all duration-1000',
						isMenuOpen
							? 'bg-[#24E0E0] translate-x-[5px]'
							: 'bg-[#fff] translate-x-0'
					)}
				/>
				<span
					className={classNames(
						'h-[2px] w-[16px] block mb-[6px] transition-all duration-1000',
						isMenuOpen
							? 'bg-[#24E0E0] translate-x-[2px]'
							: 'bg-[#fff] translate-x-0'
					)}
				/>
			</div>
			<nav
				className={classNames(
					'absolute top-[45px] left-0 overflow-hidden bg-[#25808F] rounded-[10px] z-10 max-h-0 transition-all duration-[1500ms]',
					isMenuOpen ? 'max-h-[100dvh]' : ''
				)}
			>
				<ul className='px-[40px] py-[22px] flex flex-col gap-y-[36px] items-center border border-solid border-transparent [border-image-source: linear-gradient(200.52deg, #23DCDC 3.48%, rgba(35, 220, 220, 0) 94.16%)]'>
					{headerNavItemsArr.map(({ href, text }) => (
						<li onClick={() => setIsMenuOpen(false)} key={href}>
							<Button variant='header-burger' link={href}>
								{text}
							</Button>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}
