import { Hero } from '@/components/hero'
import { MainBG } from '@/components/image'
import { News } from '@/components/news'
import { Stack } from '@/components/stack'

function Home() {
	return (
		<>
			<MainBG />
			<Hero />
			<Stack />
			<News />
		</>
	)
}

export default Home
