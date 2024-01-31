import Link from 'next/link'

import { ArrowIcon } from '@/components/icons'
import { classNames } from '@/utils/classNames'

type TButtonProps = {
	className?: string
	children?: React.ReactNode
	link?: string
	active?: boolean
	textIcon?: boolean
	type?: 'button' | 'submit' | 'reset'
	variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'icon'
	onClick?: () => void
}

export const Button = ({
	className,
	children,
	link,
	active,
	textIcon = false,
	type = 'button',
	variant = 'primary',
	onClick,
	...props
}: TButtonProps) => {
	const buttonClasses = classNames(
		'w-fit flex gap-2 cursor-pointer select-none border-[1px] [outline:none] shadow-none transition duration-500 group',
		variant === 'primary' && !link
			? 'pt-[16px] pb-[18px] px-[53px] rounded-[8px] text-[20px] leading-[24px] bg-accent border-accent hover:shadow-neon hover:brightness-125 active:brightness-90 active:shadow-none text-white'
			: '',
		variant === 'outline'
			? 'p-[12px] rounded-[10px] text-[16px] leading-[20px] text-[#D9D9D9] border-[#D9D9D9] hover:bg-white hover:text-accent active:brightness-90'
			: '',
		variant === 'ghost'
			? 'text-[24px] text-accent leading-[39px] border-none hover:brightness-125 active:brightness-90'
			: '',
		variant === 'icon'
			? 'p-[10px] text-accent border-none active:brightness-90 hover:rotate-45'
			: '',
		link && !active
			? 'text-[18px] leading-[22px] text-[#B3B3B3] border-none hover:text-accent hover:brightness-125 active:brightness-90'
			: '',
		link && active
			? 'text-[18px] leading-[22px] text-accent border-none hover:brightness-125 active:brightness-90'
			: '',
		className || ''
	)

	if (link) {
		return (
			<Link href={link} className={buttonClasses} {...props}>
				{children}
			</Link>
		)
	}

	return (
		<button
			onClick={onClick}
			type={type}
			className={buttonClasses}
			{...props}
		>
			{children}
			{textIcon && (
				<div className='w-[24px] h-[24px] p-[6px]'>
					<ArrowIcon
						size={12}
						className='group-hover:rotate-45 transition duration-500'
					/>
				</div>
			)}
		</button>
	)
}
