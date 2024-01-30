export const StackPopup = ({ name }: { name: string }) => {
	return (
		<div className='group-hover/stack-slide:opacity-100 group-hover/stack-slide:visible opacity-0 absolute bottom-[-14px] left-[50%] translate-x-[-50%] bg-[#1CADAD] px-[8px] rounded-[5px] z-10 invisible transition-all duration-1000'>
			<div className='relative'>
				<span className='absolute block top-[-15px] left-[50%] translate-x-[-50%] border-[8px] border-solid border-transparent border-b-[#1CADAD]' />
				<p className='text-[13px] select-none'>{name}</p>
			</div>
		</div>
	)
}
