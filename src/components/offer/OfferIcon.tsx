import Image from 'next/image'

export const OfferIcon = ({
	color, // tailwind class
	src,
	alt
}: {
	color: string
	src: string
	alt: string
}) => {
	return (
		<div className={`p-[20px] flex items-center justify-center ${color}`}>
			<Image width={45} height={45} src={src} alt={alt} />
		</div>
	)
}
