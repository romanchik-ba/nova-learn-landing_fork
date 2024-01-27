import CssImage from '@/assets/css.svg'
import DockerImage from '@/assets/docker.svg'
import FigmaImage from '@/assets/figma.svg'
import HtmlImage from '@/assets/html.svg'
import JsImage from '@/assets/js.svg'
import MongoDbImage from '@/assets/mongodb.svg'
import NextJsImage from '@/assets/nextjs.svg'
import NodeJsImage from '@/assets/nodejs.svg'
import ReactImage from '@/assets/react.svg'
import SassImage from '@/assets/sass.svg'
import TailwindImage from '@/assets/tailwind.svg'
import ViteImage from '@/assets/vite.svg'
import WebpackImage from '@/assets/webpack.svg'

type TStackSlideArrItem = {
	src: string
	alt: string
}

export const stackSlidesArr: TStackSlideArrItem[] = [
	{
		src: DockerImage,
		alt: 'Docker'
	},
	{
		src: FigmaImage,
		alt: 'Figma'
	},
	{
		src: HtmlImage,
		alt: 'Html'
	},
	{
		src: JsImage,
		alt: 'Javascript'
	},
	{
		src: MongoDbImage,
		alt: 'MongoDb'
	},
	{
		src: NextJsImage,
		alt: 'NextJs'
	},
	{
		src: NodeJsImage,
		alt: 'NodeJs'
	},
	{
		src: ReactImage,
		alt: 'React'
	},
	{
		src: SassImage,
		alt: 'Sass'
	},
	{
		src: TailwindImage,
		alt: 'Tailwind'
	},
	{
		src: ViteImage,
		alt: 'Vite'
	},
	{
		src: WebpackImage,
		alt: 'Webpack'
	},
	{
		src: CssImage,
		alt: 'Css'
	}
]
