import { About } from '@/components/about/About'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { Mentors } from '@/components/mentors'
import { News } from '@/components/news'
import { RapidGrowth } from '@/components/rapid-growth'
import { Review } from '@/components/review'
import { Stack } from '@/components/stack'
import { StudentProjects } from '@/components/student-projects'
import { TeamBanner } from '@/components/team-banner'

function Home() {
	return (
		<>
			<main className='relative flex min-h-screen max-w-[1440px] flex-col items-center overflow-x-hidden m-auto max-[1090px]:px-[22px] bg-[url("../assets/mainBG.png")] bg-no-repeat bg-top'>
				<Header />
				<Hero />
				<Stack />
				<About />
				<Mentors />
				<StudentProjects />
				<Review />
				<News />
				<RapidGrowth />
				<TeamBanner />
			</main>
			<Footer />
		</>
	)
}

export default Home
