import { Hero } from '@/components/hero'
import { MainBG } from '@/components/image'
import { News } from '@/components/news'
import { RapidGrowth } from '@/components/rapid-growth'

function Home() {
	return (
		<>
			<MainBG />
			<Hero />
			<News />
			<RapidGrowth />
		</>
	)
}

export default Home
