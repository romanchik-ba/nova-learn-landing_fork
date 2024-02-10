import { classNames } from '@/utils/classNames'

type TContainerProps = {
	children: React.ReactNode
	className?: string
}

export const Container = ({ children, className }: TContainerProps) => {
	return (
		<div
			className={classNames(
				'm-auto min-w-[320px] max-w-[1065px] max-[1090px]:px-[22px]',
				className ? className : ''
			)}
		>
			{children}
		</div>
	)
}
