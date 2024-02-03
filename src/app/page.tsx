import { About } from '@/components/about/About'
import { Hero } from '@/components/hero'
import { MainBG } from '@/components/image'
import { News } from '@/components/news'
import { Review } from '@/components/review'
import { Stack } from '@/components/stack'
import { StudentProjects } from '@/components/student-projects'

function Home() {
	return (
		<>
			<MainBG />
			<Hero />
			<Stack />
			<About />
			<StudentProjects />
			<Review />
			<News />
		</>
	)
}

export default Home
