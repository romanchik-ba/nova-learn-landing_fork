import { Container } from '../container'
import { ProjectSlider } from './ProjectSlider'

export const StudentProjects = () => {
	return (
		<section className='w-full mt-[20px]'>
			<Container>
				<div className='flex justify-between gap-x-[50px]'>
					<h1 className='text-[64px] w-full font-bold grow-0 shrink basis-[42%]'>
						Our students project
					</h1>
					<ProjectSlider />
				</div>
			</Container>
		</section>
	)
}
