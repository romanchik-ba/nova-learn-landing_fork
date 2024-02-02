import { EmblaCarouselType } from 'embla-carousel'

import type { TScrollToFn } from '@/types/embla'

export const emblaScrollToSlideWithDirection = (
	api: EmblaCarouselType,
	index: number,
	jump?: boolean,
	direction?: 0 | 1 | -1
) => {
	const scrollTo = api.scrollTo as TScrollToFn

	return scrollTo(index, jump, direction)
}
