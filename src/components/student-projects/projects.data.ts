import type { StaticImageData } from 'next/image'

import ProjectExample from '@/assets/project-example.png'

type TProjectItemArr = {
	src: StaticImageData
}

export const projectsItemsArr: TProjectItemArr[] = [
	{
		src: ProjectExample
	},
	{
		src: ProjectExample
	},
	{
		src: ProjectExample
	},
	{
		src: ProjectExample
	}
]
