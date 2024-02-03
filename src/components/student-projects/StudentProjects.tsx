import { Container } from '../container'
import { ProjectsBG } from '../image/ProjectsBG'
import { BlurryDot, Title } from '../ui'
import { ProjectSlider } from './ProjectSlider'

export const StudentProjects = () => {
	return (
		<section className='relative w-full mb-[250px]'>
			<ProjectsBG />
			<BlurryDot
				color='rgba(143, 21, 255, 0.42)'
				top='-330px'
				right='-240px'
			/>
			<Container>
				<div className='flex justify-between gap-x-[50px]'>
					<Title
						variant='h3'
						className='w-full grow-0 shrink basis-[42%]'
					>
						Our students project
					</Title>
					<ProjectSlider />
				</div>
			</Container>
		</section>
	)
}
