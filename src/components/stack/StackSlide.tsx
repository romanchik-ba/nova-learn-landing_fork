import Image from 'next/image'

import { StackPopup } from './StackPopup'

export const StackSlide = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className='inline-block'>
			<div className='h-[90px] flex items-center mr-[30px]'>
				<div className='group/stack-slide rounded-[16px] bg-[#1E2235] p-[14px] relative'>
					<Image
						alt={alt}
						src={src}
						width={30}
						height={30}
						className='min-w-[30px] h-[30px]'
					/>
					<StackPopup name={alt} />
				</div>
			</div>
		</div>
	)
}
