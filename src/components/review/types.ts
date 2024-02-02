import { StaticImageData } from 'next/image'

export type TReviewItemArr = {
	name: string
	avatar: StaticImageData
	text: string
	stars: number
}
