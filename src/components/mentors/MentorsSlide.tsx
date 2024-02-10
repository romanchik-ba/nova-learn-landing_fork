import Image from 'next/image'
import { type MouseEvent } from 'react'

import { classNames } from '@/utils/classNames'

import { Text, Title } from '../ui'
import type { TMentorsItemArr } from './types'

export const MentorsSlide = ({
	avatar,
	name,
	text,
	isActiveSlide,
	onClick
}: TMentorsItemArr & {
	isActiveSlide: boolean
	onClick: (e: MouseEvent<HTMLDivElement>) => void // eslint-disable-line no-unused-vars
}) => {
	return (
		<article
			onClick={onClick}
			className={classNames(
				'overflow-hidden rounded-[12px] relative min-[950px]:max-h-[380px] transition-all duration-[1500ms] max-[949px]:pointer-events-none max-[949px]:!min-w-[320px] max-[819px]:!min-w-[290px]',
				isActiveSlide
					? 'min-[950px]:!min-w-[395px] min-[950px]:mx-[20px] first:!ml-0 last:!mr-0 !max-h-full'
					: 'min-w-[120px]'
			)}
		>
			<div
				className={classNames(
					'bg-[#8051F8] flex flex-col ',
					isActiveSlide ? '' : ' cursor-pointer'
				)}
			>
				<div
					className={classNames(
						'pointer-events-none relative max-[819px]:!max-w-[290px] max-[949px]:!max-w-[320px] max-[949px]:pb-[400px]'
					)}
				>
					<Image
						src={avatar}
						alt='avatar'
						className={classNames(
							'min-[950px]:!min-w-[395px] transition-all duration-[1500ms] rounded-[12px] max-[949px]:absolute max-[949px]:top-0 max-[949px]:left-0 max-[949px]:object-cover max-[949px]:h-full max-[949px]:w-full',
							isActiveSlide
								? '-ml-0'
								: 'min-[950px]:-ml-[50px] p-0 min-[950px]:brightness-[50%]'
						)}
					/>
					<Title
						className={classNames(
							'!text-[#23DCDC] transition-all duration-1000 absolute -rotate-[90deg] top-[50%] left-[50%] -translate-x-[50%] text-nowrap max-[949px]:!opacity-0',
							isActiveSlide ? 'opacity-0' : 'opacity-100'
						)}
						variant='h4'
					>
						{name}
					</Title>
				</div>

				<div
					className={classNames(
						'transition-all duration-[1500ms] min-[950px]:w-[395px] px-[40px] py-[10px] min-[820px]:px-[60px] min-[820px]:py-[20px] mt-[15px] text-center'
					)}
				>
					<Title
						className='mb-[10px] min-[640px]:mb-[20px]'
						variant='h4'
					>
						{name}
					</Title>
					<Text>{text}</Text>
				</div>
			</div>
		</article>
	)
}
