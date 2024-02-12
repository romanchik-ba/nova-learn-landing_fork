import BackEnd from '@/assets/back-end.svg'
import Design from '@/assets/design.svg'
import English from '@/assets/english.svg'
import GameDev from '@/assets/game-dev.svg'
import Managment from '@/assets/managment.svg'
import Modeling from '@/assets/modeling.svg'
import Native from '@/assets/native.svg'
import Web from '@/assets/web.svg'

type SvgIcon = typeof import('*.svg')

type CourseItemArr = {
	src: SvgIcon
	alt: string
	CourseName: string
	CoursesQuantity: string
	className: string
}

export const courseItemsArr: CourseItemArr[] = [
	{
		src: BackEnd,
		alt: 'back-end',
		CourseName: 'Back-end',
		CoursesQuantity: '16 courses',
		className: 'grow-[1]'
	},
	{
		src: English,
		alt: 'english',
		CourseName: 'English',
		CoursesQuantity: '16 courses',
		className: 'grow-[1]'
	},
	{
		src: GameDev,
		alt: 'game-dev',
		CourseName: 'GameDev',
		CoursesQuantity: '16 courses',
		className: ''
	},
	{
		src: Design,
		alt: 'design',
		CourseName: 'Design',
		CoursesQuantity: '16 courses',
		className: ''
	},
	{
		src: Modeling,
		alt: '3d-modeling',
		CourseName: '3D Modeling',
		CoursesQuantity: '16 courses',
		className: ''
	},
	{
		src: Web,
		alt: 'web',
		CourseName: 'Front-end (Web)',
		CoursesQuantity: '16 courses',
		className: 'grow-[1]'
	},
	{
		src: Native,
		alt: 'native',
		CourseName: 'Front-end (Native)',
		CoursesQuantity: '16 courses',
		className: ''
	},
	{
		src: Managment,
		alt: 'managment',
		CourseName: 'Managment',
		CoursesQuantity: '16 courses',
		className: 'grow-[1]'
	}
]
