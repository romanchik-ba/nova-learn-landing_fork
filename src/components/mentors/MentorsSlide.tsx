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
				'overflow-hidden rounded-[12px] relative !max-h-[380px] min-w-[120px] transition-all duration-[1500ms]',
				isActiveSlide
					? '!min-w-[395px] mx-[20px] first:!ml-0 last:!mr-0 !max-h-full'
					: 'brightness-[50%]'
			)}
		>
			<div
				className={classNames(
					'bg-[#8051F8] flex flex-col',
					isActiveSlide ? '' : ' cursor-pointer '
				)}
			>
				<div className={classNames('pointer-events-none')}>
					<Image
						src={avatar}
						alt='avatar'
						className={classNames(
							'!min-w-[395px] transition-all duration-[1500ms]',
							isActiveSlide ? '-ml-0' : '-ml-[50px] p-0 h-full '
						)}
					/>
				</div>

				<div
					className={classNames(
						'transition-all duration-[1500ms] w-[395px] px-[60px] py-[20px] mt-[15px] text-center'
					)}
				>
					<Title className='mb-[20px]' variant='h4'>
						{name}
					</Title>
					<Text>{text}</Text>
				</div>
			</div>
		</article>
	)
}
