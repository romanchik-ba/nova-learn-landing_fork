import './index.scss'

export const StackPopup = ({ name }: { name: string }) => {
	return (
		<div className='stack-popup'>
			<div className='relative'>
				<span className='stack-popup-arrow' />
				<p className='text-[13px] select-none'>{name}</p>
			</div>
		</div>
	)
}
