import { classNames } from '@/utils/classNames'

import { ArrowIcon } from '../icons'
import { Button, Text } from '../ui'
import { BorderLines } from '../ui/BorderLines'

type TNewsItemProps = {
	text: string
	position: number
}

export const NewsItem = ({ text, position }: TNewsItemProps) => {
	return (
		<div className='grid grid-cols-subgrid col-span-3'>
			<div
				className={classNames(
					'relative p-[15px]',
					position === 1 ? 'col-start-1' : '',
					position === 2 ? 'col-start-2' : ''
				)}
			>
				<Text>{text}</Text>
				<Button variant='icon' className='ml-auto'>
					<ArrowIcon />
				</Button>
				<BorderLines top />
				<BorderLines left />
			</div>
		</div>
	)
}
