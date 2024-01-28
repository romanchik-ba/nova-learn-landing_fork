import { OfferItem } from './offer-item'

export const Offer = () => {
	return (
		<section className='w-full'>
			<div className='container'>
				<h1 className='text-[64px] font-bold'>We offer</h1>
				<OfferItem name='English' color='red' count='16' />
			</div>
		</section>
	)
}
