import Image from 'next/image'

import StarImage from '@/assets/star.svg'

import { Text } from '../ui'
import { TReviewItemArr } from './types'

export const ReviewSlide = ({
	stars,
	avatar,
	text,
	name,
	index,
	onClick
	// eslint-disable-next-line no-unused-vars
}: TReviewItemArr & { onClick: (i: number) => void; index: number }) => {
	return (
		<article
			onClick={() => onClick(index)}
			className='pr-[10px] grow-0 shrink-0 cursor-pointer basis-[350px] sm:basis-[390px] min-w-0 sm:pr-[24px]'
		>
			<div className='transition-all duration-500 py-[16px] px-[28px] sm:px-[35px] bg-[#3D3570] rounded-[15px] hover:scale-105 m-[8px] hover:bg-[#5e53a1]'>
				<div className='flex gap-x-[10px] sm:gap-x-[15px] mb-[10px] sm:mb-[15px]'>
					<Image
						src={avatar}
						alt={name}
						className='!h-[84px] !w-[84px] sm:!h-[94px] sm:!w-[94px]'
					/>
					<div className='flex flex-col justify-center'>
						<Text className='uppercase mb-[5px] sm:mb-[10px]'>
							{name}
						</Text>
						<ul className='flex gap-x-[1px]'>
							{Array.from({ length: stars }, (_, index) => (
								<li key={index}>
									<Image
										src={StarImage}
										alt='star'
										width={21}
										height={21}
									/>
								</li>
							))}
						</ul>
					</div>
				</div>
				<Text>{text}</Text>
			</div>
		</article>
	)
}
