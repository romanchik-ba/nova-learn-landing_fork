import Link from 'next/link'

import { LogoIcon } from '../icons'

export const Footer = () => {
	return (
		<div className='flex justify-between items-center w-[100%] max-w-[933px] flex-wrap max-[631px]:justify-center gap-[20px] pb-[155px]'>
			<div className='max-[630.40px]:hidden'>
				<LogoIcon />
			</div>
			<div className='flex gap-[20px] flex-wrap justify-center'>
				<Link
					href='#'
					className='text-[#b8b7bb] text-[18px] font-normal hover:text-[#28FAFA] transition-all ease-in-out active:text-[#1CADAD]'
				>
					Courses
				</Link>
				<Link
					href='#'
					className='text-[#b8b7bb] text-[18px] font-normal hover:text-[#28FAFA] transition-all ease-in-out active:text-[#1CADAD]'
				>
					About us
				</Link>
				<Link
					href='#'
					className='text-[#b8b7bb] text-[18px] font-normal hover:text-[#28FAFA] transition-all ease-in-out active:text-[#1CADAD]'
				>
					Our mentors
				</Link>
				<Link
					href='#'
					className='text-[#b8b7bb] text-[18px] font-normal hover:text-[#28FAFA] transition-all ease-in-out active:text-[#1CADAD]'
				>
					Projects
				</Link>
				<Link
					href='#'
					className='text-[#b8b7bb] text-[18px] font-normal hover:text-[#28FAFA] transition-all ease-in-out active:text-[#1CADAD]'
				>
					News
				</Link>
			</div>
		</div>
	)
}
