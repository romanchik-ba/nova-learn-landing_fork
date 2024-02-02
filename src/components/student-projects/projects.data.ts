import type { StaticImageData } from 'next/image'

import ProjectExample2 from '@/assets/project-example2.png'
import ProjectExample3 from '@/assets/project-example3.png'
import ProjectExample4 from '@/assets/project-example4.png'
import ProjectExample from '@/assets/project-example.png'

type TProjectItemArr = {
	src: StaticImageData
}

export const projectsItemsArr: TProjectItemArr[] = [
	{
		src: ProjectExample
	},
	{
		src: ProjectExample2
	},
	{
		src: ProjectExample3
	},
	{
		src: ProjectExample4
	}
]
