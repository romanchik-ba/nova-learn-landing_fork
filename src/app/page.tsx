import { About } from '@/components/about/About'
import { Hero } from '@/components/hero'
import { Mentors } from '@/components/mentors'
import { News } from '@/components/news'
import { RapidGrowth } from '@/components/rapid-growth'
import { Review } from '@/components/review'
import { Stack } from '@/components/stack'
import { StudentProjects } from '@/components/student-projects'
import { TeamBanner } from '@/components/team-banner'
import { Courses } from '@/components/we-offer'

function Home() {
	return (
		<>
			<Hero />
			<Stack />
			<Courses />
			<About />
			<Mentors />
			<StudentProjects />
			<Review />
			<News />
			<RapidGrowth />
			<TeamBanner />
		</>
	)
}

export default Home
