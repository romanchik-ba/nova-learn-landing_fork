import Image from 'next/image'

import OfferImage from '@/assets/offer.svg'

export const WeOfferIcon = ({ color, alt }: { color: string; alt: string }) => {
	return (
		<div
			className={`p-[20px] flex items-center justify-center rounded-[10px] w-[90px] h-[90px] ${color}`}
		>
			<Image width={45} height={45} src={OfferImage} alt={alt} />
		</div>
	)
}
