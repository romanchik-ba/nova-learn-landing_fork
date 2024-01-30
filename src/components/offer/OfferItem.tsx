import { OfferIcon } from './OfferIcon'

export const OfferItem = ({
	name,
	color,
	count,
	src
}: {
	color: string
	name: string
	count: string
	src: string
}) => {
	return (
		<article className='cursor-pointer hover:bg-[#302B55] transition-all duration-500 inline-block border border-solid border-[#8051F8] rounded-[15px]'>
			<div className='flex gap-x-[20px] py-[35px] px-[30px] w-auto'>
				<OfferIcon color={color} src={src} alt={name} />
				<div className='py-[7px]'>
					<p className='text-[25px] font-bold mb-[12px]'>{name}</p>
					<p>
						<span className='mr-[4px]'>{count}</span>Courses
					</p>
				</div>
			</div>
		</article>
	)
}
