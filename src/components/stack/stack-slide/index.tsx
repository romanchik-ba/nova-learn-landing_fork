import Image from 'next/image'

import { StackPopup } from '../stack-popup'
import './index.scss'

export const StackSlide = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<div className='inline-block'>
			<div className='h-[90px] flex items-center mr-[30px]'>
				<div className='stack-slide'>
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
