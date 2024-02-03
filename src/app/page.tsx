import { Hero } from '@/components/hero'
import { MainBG } from '@/components/image'
import { News } from '@/components/news'
import { RapidGrowth } from '@/components/rapid-growth'
import { Review } from '@/components/review'
import { Stack } from '@/components/stack'
import { StudentProjects } from '@/components/student-projects'

function Home() {
	return (
		<>
			<MainBG />
			<Hero />
			<Stack />
			<StudentProjects />
			<Review />
			<News />
			<RapidGrowth />
		</>
	)
}

export default Home
