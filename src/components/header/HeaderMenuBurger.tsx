'use client'

import Link from 'next/link'
import { useRef } from 'react'

import { headerNavItemsArr } from './header.data'

export const HeaderMenuBurger = () => {
	const inputRef = useRef<HTMLInputElement | null>(null)

	const closeByClick = () => {
		if (inputRef.current) inputRef.current.checked = false
	}

	return (
		<>
			<input
				id='header-state'
				className='peer/burger-state hidden header-burger-state'
				type='checkbox'
				ref={inputRef}
			/>
			<label
				htmlFor='header-state'
				className='absolute top-0 left-0 bottom-0 right-0 z-10'
			/>
			<div className='peer-checked/burger-state min-[860px]:hidden relative burger-body z-20'>
				<label htmlFor='header-state cursor-pointer'>
					<span className=' h-[2px] w-[20px] block mb-[6px] transition-all duration-1000 bg-[#fff]' />
					<span className='h-[2px] w-[12px] block mb-[6px] transition-all duration-1000 bg-[#fff] translate-x-0' />
					<span className='h-[2px] w-[14px] block mb-[6px] transition-all duration-1000 bg-[#fff] translate-x-0' />
				</label>
				<nav className='absolute top-[45px] left-0 overflow-hidden bg-[#25808F] rounded-[10px] z-20 max-h-0 transition-all duration-[1000ms] header-menu-burger'>
					<ul className='w-[165px] py-[8px] border border-solid border-transparent [border-image-source: linear-gradient(200.52deg, #23DCDC 3.48%, rgba(35, 220, 220, 0) 94.16%)]'>
						{headerNavItemsArr.map(({ href, text }) => (
							<li key={href} onClick={closeByClick}>
								<Link
									className='py-[18px] block text-center text-[20px] leading-[24px] text-[#FFFFFFB2]'
									href={href}
								>
									{text}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</>
	)
}
