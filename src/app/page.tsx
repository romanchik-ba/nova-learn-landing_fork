import { Hero } from '@/components/hero'
import { MainBG } from '@/components/image'
import { News } from '@/components/news/News'

function Home() {
	return (
		<>
			<MainBG />
			<Hero />
			<News />
		</>
	)
}

export default Home
