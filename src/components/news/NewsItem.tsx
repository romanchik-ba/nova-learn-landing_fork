'use client'

import { useWindowSize } from '@/hooks/useWindowSize'
import { classNames } from '@/utils/classNames'

import { ArrowIcon } from '../icons'
import { Button, Text } from '../ui'
import { BorderLines } from '../ui/BorderLines'

type TNewsItemProps = {
	text: string
	position: number
}

export const NewsItem = ({ text, position }: TNewsItemProps) => {
	const windowSize = useWindowSize()
	const isWidthSm = windowSize.width && windowSize.width < 768
	let delay

	switch (true) {
		case isWidthSm && position === 1:
			delay = 'middle'
			break

		case isWidthSm && position === 2:
			delay = 'long'
			break

		default:
			delay = 'default'
	}
	return (
		<div className='grid md:grid-cols-subgrid col-span-3'>
			<div
				className={classNames(
					'relative px-[3px] md:px-[15px] py-[25px] md:py-[15px]',
					position === 1 ? 'md:col-start-1' : '',
					position === 2 ? 'md:col-start-2' : ''
				)}
			>
				<Text>{text}</Text>
				<Button variant='icon' className='ml-auto'>
					<ArrowIcon />
				</Button>
				{!isWidthSm && <BorderLines left />}
				<BorderLines top delay={delay} />
			</div>
		</div>
	)
}
